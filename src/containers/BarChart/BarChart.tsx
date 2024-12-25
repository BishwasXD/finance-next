"use client";
import React from "react";
import ReactLoading from 'react-loading'
import dynamic from "next/dynamic";
import { useBarChart } from "@/hooks/useBarChart";
import { ApexOptions } from "apexcharts";
const ReactApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

const BarChart = () => {
  const { data, isError, isLoading } = useBarChart();

  if (isError) {
    return <p>Something went wrong, try refreshing</p>;
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
      width: "100%",
      foreColor:'#64748b'
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
    !isLoading ? (
    <div className="shadow-md">
      <ReactApexChart
        options={options}
        series={series as any}
        type="bar"
        height={400}

      />
    </div>
    ) : <ReactLoading type="bars" height={'5%'} width={'5%'} color="#ADD8E6"/>
  );
};

export default BarChart;
