"use client";
import React from "react";
import ReactApexChart from "react-apexcharts";
import { useBarChart } from "@/hooks/useBarChart";
import { ApexOptions } from "apexcharts";


const BarChart = () => {
  const { data, isError, isLoading } = useBarChart();

  if (isError) {
    return <p>Something went wrong, try refreshing</p>;
  }

  if (isLoading) {
    return <p>Loading...</p>;
  }

  const series = [
    {
      name: "Income",
      data: Object.values(data?.data[0] || []).map((key) => key === 0 ? null : Number(key)),
    },
    {
      name: "Expense",
      data: Object.values(data?.data[1]  || []).map((key) => key === 0 ? null : Number(key)),
    },
    {
      name: "Investment",
      data: Object.values(data?.data[2]  || []).map((key) => key === 0 ? null : Number(key)),
    },
    {
      name: "Saving",
      data: Object.values(data?.data[3]  || []).map((key) => key === 0 ? null : Number(key)),
    },
  ];

  const options: ApexOptions = {
    chart: {
      type: "bar",
      height: 350,
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "55%",
      },
    },
    stroke: {
      show: true,
      width: 2,
      colors: ["transparent"],
    },
    xaxis: {
      categories: data?.labels
    },
    yaxis: {
      title: {
        text: "Amount",
      },
    },
    fill: {
      opacity: 1,
    },
  };

  return (
    <div>
      <ReactApexChart
        options={options}
        series={series as any}
        type="bar"
        height={400}

      />
    </div>
  );
};

export default BarChart;
