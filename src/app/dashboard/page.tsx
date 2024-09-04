import React from "react";
import LineChart from "@/containers/LineChart/LineChart";
import PieChart from "@/containers/PieChart/PieChart";
const DashboardRoute = () => {
  return (
    <div>
      <LineChart />
      <PieChart />
    </div>
  );
};

export default DashboardRoute;
