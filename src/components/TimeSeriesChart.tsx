import React from "react";
import ReactApexChart from "react-apexcharts";
import { ApexOptions } from "apexcharts";

interface TimeSeriesChartProps {
  data: { date: string; visitors: number }[];
}

const TimeSeriesChart: React.FC<TimeSeriesChartProps> = ({ data }) => {
  const series = [
    {
      name: "Visitors",
      data: data.map((d) => [new Date(d.date).getTime(), d.visitors]), // Ensure UNIX timestamp
    },
  ];

  const options: ApexOptions = {
    // Explicitly set the type for options
    chart: { type: "line", zoom: { enabled: true } },
    xaxis: {
      type: "datetime",
      labels: {
        formatter: function (val: number) {
          return new Date(val).toLocaleDateString(); // Format date labels
        },
      },
    },
  };

  return (
    <ReactApexChart
      options={options}
      series={series}
      type="line"
      height={350}
    />
  );
};

export default TimeSeriesChart;
