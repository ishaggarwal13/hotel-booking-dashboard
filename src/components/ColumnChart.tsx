import React from "react";
import ReactApexChart from "react-apexcharts";
import { ApexOptions } from "apexcharts";

interface ColumnChartProps {
  data: { country: string; visitors: number }[];
}

const ColumnChart: React.FC<ColumnChartProps> = ({ data }) => {
  const series = [{ name: "Visitors", data: data.map((d) => d.visitors) }];

  const options: ApexOptions = {
    chart: { type: "bar" },
    xaxis: {
      categories: data.map((d) => d.country),
    },
    plotOptions: {
      bar: {
        horizontal: false,
      },
    },
    title: {
      text: "Visitors per Country",
      align: "center",
    },
  };

  return (
    <ReactApexChart options={options} series={series} type="bar" height={350} />
  );
};

export default ColumnChart;
