import React from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { expensePreferencesOptions, incomePreferencesOptions, budgetPreferncesOptions } from "@/const";
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

const SelectPreferences = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 flex-col">
      <div className="flex flex-col gap-[20px] px-[40px] py-[40px] w-[700px] bg-white shadow-md rounded-lg">
        <p className="text-sm text-center">
          Select your preferences to get started. You can always update them later.
        </p>
        <div className="flex flex-col gap-[10px] text-sm">
          <p className="text-red-500 font-bold">Expense Categories</p>
          {expensePreferencesOptions.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center p-[10px] border-b border-gray-200"
            >
              <p className="text-sm">{item.category}</p>
              <Checkbox />
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-[10px] text-sm">
          <p className="text-green-500 font-bold">Income Sources</p>
          {incomePreferencesOptions.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center p-[10px] border-b border-gray-200"
            >
              <p className="text-sm">{item.category}</p>
              <Checkbox />
            </div>
          ))}
        </div>
        <div    >
          <Select >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select a budget preference" />
            </SelectTrigger>
            <SelectContent className="w-full bg-white shadow-md rounded-lg">
              <SelectGroup>
                <SelectLabel className="text-sm font-bold ">Budget Preferences</SelectLabel>
                {budgetPreferncesOptions.map((option) => (
                  <SelectItem
                    key={option}
                    value={option}
                    className="hover:bg-green-100 hover:text-black w-full"
                  >
                    {option}
                  </SelectItem>
                ))}
              </SelectGroup>
              <SelectSeparator />
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
};

export default SelectPreferences;



