"use client";
import React from "react";
import ReactApexChart from "react-apexcharts";
import { ApexOptions } from "apexcharts";
import { useDonutChart } from "@/hooks/useDonutChart";
const DonutChart = () => {
  const { data, isError, isLoading } = useDonutChart();

  if (isError) {
    return <p>Something went wrong, try refreshing or praying</p>;
  }

  const chartOptions = {
    labels: ["Income", "Expense"],
  } as ApexOptions;

  return (
    <div className="flex border shadow-md px-[30px] ">
      {!isLoading ? (
        <ReactApexChart
          options={chartOptions}
          series={data}
          type="donut"
          width={590}
        />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default DonutChart;
