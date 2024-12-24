"use client";
import React from "react";
import dynamic from "next/dynamic";
import { ApexOptions } from "apexcharts";
import { usePieChart } from "@/hooks/usePieChart";
const ReactApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

const PieChart = () => {
  
  const {
    data,
    isError,
    isLoading,
  } = usePieChart();
 
  if (isError) {
    return <p>Something went wrong, try refreshing...</p>;
  }
  if(isLoading){
    return <p>Loading...</p>;
  }
  const expenseOptions = {
    labels: data?.expenseLabels,
  } as ApexOptions;
  const incomeOptions = {
    labels: data?.incomeLabels,
  } as ApexOptions;
  return (
    <div className="flex gap-24">
      <div className="bg-white shadow-md rounded-md p-4">
        <p className="text-blue-500 mb items-center justify-center font-semibold inline-block">
          Expense Breakdown
          <span className="block h-[2px] w-full bg-blue-300 mt-1"></span>
        </p>
        <ReactApexChart
          options={expenseOptions}
          series={data?.expenseValues.map((val)=> Number(val))}
          type="pie"
          width={600}
          height={500}
        />
      </div>

      <div className="bg-white shadow-md rounded-md p-4">
        <p className="text-blue-500 mb items-center justify-center font-semibold inline-block">
          Income Breakdown
          <span className="block h-[2px] w-full bg-blue-300 mt-1"></span>
        </p>
        <ReactApexChart
          options={incomeOptions}
          series={data?.incomeValues.map((val)=> Number(val))}
          type="pie"
          width={600}
          height={500}
        />
      </div>
    </div>
  );
};

export default PieChart
