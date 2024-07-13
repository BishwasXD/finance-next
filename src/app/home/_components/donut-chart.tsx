"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";

import { getIncomeUrl, getExpenseUrl } from "@/requests/financeRequests";
import DonutChart from "@/components/ui/donut-chart";


const Donut = () => {
  interface IchartData{
  labels: string[]
  series: number[]
  }
  const chartDefault = {
    labels:['random_label'],
    series:[1]
  }
  const [incomeChartData, setIncomeChartData] = useState<IchartData>(chartDefault);
  const [expenseChartData, setExpenseChartData] = useState<IchartData>(chartDefault);

  const getChartData = async () => {
    try {
      const incomeData = await axios.get(getIncomeUrl);
      const incomeChart = generateChartData(incomeData.data);
      setIncomeChartData(incomeChart);

      const expenseData = await axios.get(getExpenseUrl);
      const expenseChart = generateChartData(expenseData.data);
      setExpenseChartData(expenseChart);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getChartData();
  }, []);

  const generateChartData = (data: object) => {
    return {
      labels: Object.keys(data),
      series: Object.values(data),
    };
  };

  return (
    <div className="flex flex-col gap-[20px] px-[20px] py-[40px] w-1/4">
      <div className="flex flex-col gap-[10px]  p-[10px] ">
        <p className="text-green-400 text-center">Income</p>
        <DonutChart
          options={incomeChartData}
          series={incomeChartData.series}
          width={350}
          height={350}
        />
      </div>
      <div className="flex flex-col gap-[10px]  p-[10px]">
        <p className="text-red-400 text-center">Expense</p>
        <DonutChart
          options={expenseChartData}
          series={expenseChartData.series}
          width={350}
          height={350}
          
        />
      </div>
    </div>
  );
};

export default Donut;