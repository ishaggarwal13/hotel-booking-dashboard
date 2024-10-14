import React, { useEffect, useState } from "react";
import DateSelector from "./components/DateSelector";
import TimeSeriesChart from "./components/TimeSeriesChart";
import ColumnChart from "./components/ColumnChart";
import SparklineChart from "./components/SparklineChart";
import { getBookingData } from "./service/api";

const App: React.FC = () => {
  const [bookingData, setBookingData] = useState<any[]>([]);

  const fetchData = (startDate: Date, endDate: Date) => {
    getBookingData(startDate.toISOString(), endDate.toISOString()).then(
      (data) => {
        setBookingData(data);
      }
    );
  };

  const visitorsPerDay = bookingData.map((booking) => ({
    date: new Date(
      booking.arrival_date_year,
      booking.arrival_date_month - 1,
      booking.arrival_date_day_of_month
    ).toISOString(),
    visitors: booking.adults + booking.children + booking.babies,
  }));

  const visitorsPerCountry = bookingData.reduce((acc, booking) => {
    const country = booking.country;
    acc[country] =
      (acc[country] || 0) + booking.adults + booking.children + booking.babies;
    return acc;
  }, {} as Record<string, number>);

  return (
    <div>
      <DateSelector onDateChange={fetchData} />
      <TimeSeriesChart data={visitorsPerDay} />
      <ColumnChart
        data={Object.keys(visitorsPerCountry).map((country) => ({
          country,
          visitors: visitorsPerCountry[country],
        }))}
      />
      <SparklineChart
        title="Adult Visitors"
        data={bookingData.map((booking) => booking.adults)}
      />
      <SparklineChart
        title="Children Visitors"
        data={bookingData.map((booking) => booking.children)}
      />
    </div>
  );
};

export default App;
