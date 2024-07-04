import React from "react";
import NavBar from "@/containers/Navbar/navbar";
import IncomeExpenseForm from "./_components/income-expense-form";
import Donut from "./_components/donut-chart";

const HomeRoute = () => {
  return (
    <div>
      <NavBar />
      <IncomeExpenseForm />
      <Donut />
    </div>
  );
};

export default HomeRoute;
