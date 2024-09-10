import React from "react";
import NavBar from "@/containers/Navbar/navbar";
import SideBarContainer from "@/containers/SideBarContainer/SideBarContainer";
import SummaryCards from "@/components/ui/summarycard";
import AddTransactionForm from "@/containers/AddTransactionForm/AddTransactionForm";
import DonutChart from "@/containers/DonutChart/DonutChart";
import TransactionsSummaryTable from "@/containers/TransactionsSummaryTable/TransactionsSummaryTable";

const HomeRoute = () => {
  return (
    <div className="flex">
     <SideBarContainer/>
     <div className="flex flex-col gap-[20px]">
      <NavBar />
      <SummaryCards/>
      <div className="flex gap-[50px]">
      <AddTransactionForm/>
      <DonutChart/>
      </div>
      <TransactionsSummaryTable/>
      </div>
    
     
    </div>
  );
};

export default HomeRoute;
