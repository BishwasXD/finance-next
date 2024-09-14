import React from "react";
import LineChart from "@/containers/LineChart/LineChart";
import PieChart from "@/containers/PieChart/PieChart";

const DashboardRoute = () => {
  return (
    <div className="flex flex-col gap-10 w-full py-10">
      <LineChart />
      <PieChart />
  
    </div>
  );
};

export default DashboardRoute;
