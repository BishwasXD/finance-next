"use client";
import React, { useEffect, useState } from "react";
import Plot from "react-plotly.js";
import axios from "axios";
import { backendRequests } from "@/request";

const LineChart = () => {
  const [incomeData, setIncomeData] = useState([]);
  const [expenseData, setExpenseData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        backendRequests.getLineChartDataUrl
      );
      setIncomeData(response.data.data.income);
      setExpenseData(response.data.data.expense);
    } catch (error) {
      console.log("Error occurred", error);
    }
  };

  const incomeDates = Object.keys(incomeData);
  const incomeAmounts = Object.values(incomeData);
  const expenseDates = Object.keys(expenseData);
  const expenseAmounts = Object.values(expenseData);

  const data = [
    {
      x: incomeDates,
      y: incomeAmounts,
      mode: "lines+markers",
      name: "Income",
      hovertemplate: "%{x|%d %b} <br>Income: %{y}",
    },
    {
      x: expenseDates,
      y: expenseAmounts,
      mode: "lines+markers",
      name: "Expense",
      hovertemplate: "%{x|%d %b} <br>Expense: %{y}",
    },
  ];

  const layout = {
    xaxis: {
      type: "date" as "date",
      tickformat: "%b",
    },
    yaxis: {
      title: "Amount",
    },
    title: "Income vs Expense Trend",
    
  };

  return (
    <Plot
      data={data}
      layout={layout}
     
    />
  );
};

export default LineChart;
