"use client";
import dynamic from "next/dynamic";
import ReactLoading from 'react-loading'
import React from "react";
import { useLineChart } from "@/hooks/useLineChart";
const Plot = dynamic(() => import("react-plotly.js"), { ssr: false });

const LineChart = () => {
 const {data:{incomeDates, incomeValues, expenseDates, expenseValues}, isError, isLoading} = useLineChart()
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
    :<ReactLoading type="bars"  width={'5%'} height={'5%'} color="#ADD8E6"/>
      }
    </div>
  );
};

export default LineChart;
