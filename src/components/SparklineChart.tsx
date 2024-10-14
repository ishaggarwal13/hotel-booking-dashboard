import React from "react";
import ReactApexChart from "react-apexcharts";
import { ApexOptions } from "apexcharts";

interface SparklineChartProps {
  title: string;
  data: number[];
}

const SparklineChart: React.FC<SparklineChartProps> = ({ title, data }) => {
  const series = [{ name: title, data }];

  const options: ApexOptions = {
    chart: { type: "line", sparkline: { enabled: true } },
    stroke: {
      curve: "smooth",
      width: 2,
    },
    tooltip: {
      enabled: false,
    },
    xaxis: {
      type: "category",
      labels: {
        show: false,
      },
    },
    yaxis: {
      show: false,
    },
  };

  return (
    <div>
      <h4>{title}</h4>
      <ReactApexChart
        options={options}
        series={series}
        type="line"
        height={150}
      />
    </div>
  );
};

export default SparklineChart;
