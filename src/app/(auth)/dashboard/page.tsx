import React from "react";
import LineChart from "@/containers/LineChart/LineChart";
import PieChart from "@/containers/PieChart/PieChart";
import BarChart from "@/containers/BarChart/BarChart";

const DashboardRoute = () => {
  return (
    <div className="flex flex-col gap-10 w-full py-10">
      <LineChart />
      <PieChart />
      <BarChart/>
  
    </div>
  );
};

export default DashboardRoute;
