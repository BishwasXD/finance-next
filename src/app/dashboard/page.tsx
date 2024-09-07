import React from "react";
import LineChart from "@/containers/LineChart/LineChart";
import PieChart from "@/containers/PieChart/PieChart";
import DonutChart from "@/containers/DonutChart/DonutChart";
const DashboardRoute = () => {
  return (
    <div>
      <LineChart />
      <PieChart />
      <DonutChart/>
    </div>
  );
};

export default DashboardRoute;
