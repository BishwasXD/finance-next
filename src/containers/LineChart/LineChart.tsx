"use client";
import dynamic from "next/dynamic";
import ReactLoading from 'react-loading';
import React from "react";
import { useLineChart } from "@/hooks/useLineChart";
const Plot = dynamic(() => import("react-plotly.js"), { ssr: false });

const LineChart = () => {
  const { data: { incomeDates, incomeValues, expenseDates, expenseValues }, isError, isLoading } = useLineChart();

  if (isError) {
    return <p>Something went wrong, try refreshing...</p>;
  }

  const chartData = [
    {
      x: incomeDates,
      y: incomeValues,
      mode: "lines+markers",
      name: "Income",
      hovertemplate: "%{x|%d %b} <br>Income: %{y}",
      line: {
        color: '#4CAF50',  // Green for income
        width: 2
      },
      marker: {
        size: 6,
        color: '#4CAF50'
      }
    },
    {
      x: expenseDates,
      y: expenseValues,
      mode: "lines+markers",
      name: "Expense",
      hovertemplate: "%{x|%d %b} <br>Expense: %{y}",
      line: {
        color: '#FF5252', 
        width: 2
      },
      marker: {
        size: 6,
        color: '#FF5252'
      }
    }
  ];

  const layout = {
    paper_bgcolor: 'rgba(0,0,0,0)',  
    plot_bgcolor: 'rgba(0,0,0,0)',
    xaxis: {
      type: "date" as "date",
      tickformat: "%b",
      gridcolor: '#2D3748',  
      linecolor: '#2D3748',
      tickfont: { color: '#64748b' }
    },
    yaxis: {
      title: "Amount",
      gridcolor: '#2D3748',
      linecolor: '#2D3748',
      tickfont: { color: '#64748b' },
      titlefont: { color: '#64748b' }
    },
    title: {
      text: "Income vs Expense Trend",
      font: { color: '#64748b' }
    },
    legend: {
      font: { color: '#64748b' },
      bgcolor: 'rgba(0,0,0,0)'
    },
    hovermode: 'closest',
    hoverlabel: {
      bgcolor: '#1A202C', 
      font: { color: '#E2E8F0' }
    },
    margin: { t: 50, r: 20, b: 40, l: 60 }
  };

  return (
    <div>
      {!isLoading ? (
        <div className="rounded-lg overflow-hidden">
          <Plot
            data={chartData}
            layout={layout}
            config={{ displayModeBar: false }}
            style={{ width: "100%", minWidth: "300px", height: 500 }}
            useResizeHandler={true}
          />
        </div>
      ) : (
        <ReactLoading type="bars" width={'5%'} height={'5%'} color="#ADD8E6"/>
      )}
    </div>
  );
};

export default LineChart;
