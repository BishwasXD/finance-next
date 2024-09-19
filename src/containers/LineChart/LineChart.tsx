"use client";
import React from "react";
import Plot from "react-plotly.js";
import { useLineChart } from "@/hooks/useLineChart";

const LineChart = () => {
 const {data:{incomeDates, incomeValues, expenseDates, expenseValues}, isError, isLoading} = useLineChart()
 console.log('DATA', incomeValues)
 if(isError){
  return <p>Something went wrong, try refreshing...</p>
 }

  const chartData = [
    {
      x: incomeDates,
      y: incomeValues,
      mode: "lines+markers",
      name: "Income",
      hovertemplate: "%{x|%d %b} <br>Income: %{y}",
    },
    {
      x: expenseDates,
      y: expenseValues,
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
    <div>
    {!isLoading ? 
    <Plot
      data={chartData}
      layout={layout}
      config={{ displayModeBar:false}}
      style={{ width: "100%", minWidth: "300px", height: 500 }}
      useResizeHandler={true}
      className="bg-red-300"
    />
    :<p>Loading...</p>
    }
    </div>
  );
};

export default LineChart;
