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
      data: data.map((d) => [new Date(d.date).getTime(), d.visitors]),
    },
  ];

  const options: ApexOptions = {
    chart: { type: "line", zoom: { enabled: true } },
    xaxis: {
      type: "datetime",
      labels: {
        formatter: (value: string, timestamp?: number): string => {
          return new Date(timestamp!).toLocaleDateString();
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
