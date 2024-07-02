"use client";
import React, { useState } from "react";
import Button from "@/app/components/Button/button";
import Input from "@/app/components/Input/input";
import Select from "@/app/components/Select/select";
import {
  addExpenseUrl,
  addIncomeUrl,
  getExpenseUrl,
  getIncomeUrl,
} from "@/app/requests/financeRequests";
import axios from "axios";

const IncomeExpenseForm = () => {
  const incomeList = [
    "Stocks",
    "Salary",
    "Freelancing",
    "Investments",
    "Bonuses",
    "Rental Income",
    "Dividends",
  ];
  const expenseList = [
    "Rent",
    "Utilities",
    "Groceries",
    "Transportation",
    "Entertainment",
    "Insurance",
    "Healthcare",
    "Dining Out",
    "Education",
    "Miscellaneous",
  ];
  
  const [formState, setFormState] = useState<boolean>(false);
  const [formData, setFormData] = useState<object>({'description':'no description', 'user':5});
  const [slected, setSelected] = useState<string>('')
  const handleFormChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFormSubmit = async () => {
    try {
      const response = await axios.post(
        formData ? addIncomeUrl : addExpenseUrl,
        formData
      );
      console.log(response.data)
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="bg-white w-[502px] flex flex-col px-[30px] py-[40px] mt-[20px] ml-[20px] gap-[30px]">
      <div className="flex justify-center">
        <p
          onClick={() => setFormState((prevstate) => !prevstate)}
          className="cursor-pointer"
        >
          {formState ? "Income" : "Expense"}
        </p>
      </div>
      <Select
        options={formState ? incomeList : expenseList}
        name={formState ? "source" : "category"}
        
        value={slected}
        
      />
      <p>{slected}</p>
      <Input
        placeholder="Enter Amount"
        name="amount"
        onChange={handleFormChange}
      />
      <Button
        text={formState ? "Add Income" : "Add Expense "}
        onClick={handleFormSubmit}
      />
    </div>
  );
};

export default IncomeExpenseForm;
