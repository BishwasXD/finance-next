"use client";
import React from "react";
import ReactApexChart from "react-apexcharts";
import { useBarChart } from "@/hooks/useBarChart";
import { ApexOptions } from "apexcharts";

//TODO: ADD FILTER OPTION, MATCH COLOR FOR LABEL, FIX LABEL FROM BACKEND.
const BarChart = () => {
  const { data, isError, isLoading } = useBarChart();

  if (!isLoading && data) {
    console.log("DATA IS", data);
    console.log("Income data", Object.values(data?.income));
  }

  if (isError) {
    return <p>Something went wrong, try refreshing</p>;
  }

  if (isLoading) {
    return <p>Loading...</p>;
  }

  const series = [
    {
      name: "Income",
      data: Object.values(data?.income || []).map((key) => Number(key)),
    },
    {
      name: "Expense",
      data: Object.values(data?.expenses || []).map((value) => Number(value)),
    },
    {
      name: "Investment",
      data: Object.values(data?.investments || []).map((value) => Number(value)),
    },
    {
      name: "Saving",
      data: Object.values(data?.savings || []).map((value) => Number(value)),
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
      categories: [
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
      ],
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
        series={series}
        type="bar"
        height={400}

      />
    </div>
  );
};

export default BarChart;
