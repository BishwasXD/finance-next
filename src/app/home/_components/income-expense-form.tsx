"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectLabel,
  SelectTrigger,
  SelectValue,
  SelectSeparator,
  SelectItem,
} from "@/components/ui/select";
import {
  addExpenseUrl,
  addIncomeUrl,
  getExpenseUrl,
  getIncomeUrl,
} from "@/requests/financeRequests";
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
  const token = sessionStorage.getItem('accessToken');
  console.log('user token',token);

  const [formState, setFormState] = useState<boolean>(false);

  const handleFormChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFormSubmit = async () => {
    try {
      const response = await axios.post(
        formState ? addIncomeUrl : addExpenseUrl,
        formData,{
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  const [formData, setFormData] = useState<object>({
    user: 5,
  });
  const handleSelectChange = (val: string) => {
    setFormData((prevData) => ({
      ...prevData,
      [formState ? "source" : "category"]: val,
    }));
  };

  return (
    <div className="flex flex-col gap-[20px] bg-white px-[30px] py-[40px] mt-[20px] ml-[20px] rounded-lg shadow-md w-[440px] border-2 dark:bg-dark_mode dark:border dark:border-black">
      <div className="flex justify-center">
        <p
          onClick={() => setFormState((prevstate) => !prevstate)}
          className="cursor-pointer"
        >
          {formState ? "Income" : "Expense"}
        </p>
      </div>

      <Select
        onValueChange={handleSelectChange}
        name={formState ? "source" : "category"}
      >
        <SelectTrigger>
          <SelectValue placeholder="No value slected" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel></SelectLabel>
            {(formState ? incomeList : expenseList).map((option) => (
              <SelectItem
                key={option}
                value={option}
                className="hover:bg-green-100 hover:text-black hover:rounded-xs"
              >
                {option}
              </SelectItem>
            ))}
          </SelectGroup>
          <SelectSeparator />
        </SelectContent>
      </Select>
      <Input
        placeholder="Description.."
        name="description"
        onChange={handleFormChange}
      />
      <Input
        placeholder="Enter Amount"
        name="amount"
        onChange={handleFormChange}
      />
      <Button
        title={formState ? "Add Income" : "Add Expense"}
        onClick={handleFormSubmit}
        variant="outline"
      />
    </div>
  );
};

export default IncomeExpenseForm;
