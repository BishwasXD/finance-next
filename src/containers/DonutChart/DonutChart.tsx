'use client'
import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { backendRequests } from "@/request";
import ReactApexChart from "react-apexcharts";
import { ApexOptions } from "apexcharts";
const DonutChart = () => {
  const [totalAmount, setTotalAmount] = useState([50, 50]);

  useEffect(() => {
    fetchData();
  }, [totalAmount]);
  const fetchData = async () => {
    try {
      const res = await axios.get(backendRequests.getDonutChartDataUrl);
      const total = [res.data.data[0].Income, res.data.data[1].Expense];
      setTotalAmount(total);
    } catch (error) {
      console.log("Error Occured", error);
    }
  };

  const chartOptions = {
    labels: ["Income", "Expense"],
  } as ApexOptions;
  return (
    <div>
      <ReactApexChart
        options={chartOptions}
        series={totalAmount}
        type="donut"
        width={700}
      />
    </div>
  );
};

export default DonutChart;
