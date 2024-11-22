"use client";

import React from "react";
import dynamic from "next/dynamic";
import { ApexOptions } from "apexcharts";
import { useDonutChart } from "@/hooks/useDonutChart";

const ReactApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

const DonutChart = () => {
  const { data, isError, isLoading } = useDonutChart();

  if (isError) {
    return <p>Something went wrong, try refreshing...</p>;
  }

  const chartOptions = {
    labels: ["Income", "Expense"],
  } as ApexOptions;

  return (
    <div>
      <div className="border shadow-md px-8 py-10 rounded-md">
        <p className="text-blue-500 mb-12 items-center justify-center font-semibold inline-block">
          Income Expense Breakdown
          <span className="block h-[2px] w-full bg-blue-300 mt-1"></span>
        </p>
        {!isLoading ? (
          <ReactApexChart
            options={chartOptions}
            series={data}
            type="donut"
            width={590}
            height={400}
          />
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default DonutChart;

