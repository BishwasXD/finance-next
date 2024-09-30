"use client";
import React from "react";
import ReactApexChart from "react-apexcharts";
import { ApexOptions } from "apexcharts";
import { usePieChart } from "@/hooks/usePieChart";
const PieChart = () => {
  
  const {
    data,
    isError,
    isLoading,
  } = usePieChart();
 
  if (isError || !data) {
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
console.log('THE DAMN DATA IS: ', data.incomeValues)
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
        />
      </div>
    </div>
  );
};

export default PieChart;
