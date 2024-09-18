import React from "react";
import AddTransactionForm from "@/containers/AddTransactionForm/AddTransactionForm";
import DonutChart from "@/containers/DonutChart/DonutChart";
import TransactionsSummaryTable from "@/containers/TransactionsSummaryTable/TransactionsSummaryTable";

const HomeRoute = () => {
  return (
    <div className="flex flex-col w-full">
      <div className="flex gap-12">
        <AddTransactionForm />
        <DonutChart />
      </div>
      <TransactionsSummaryTable />
    </div>
  );
};

export default HomeRoute;
