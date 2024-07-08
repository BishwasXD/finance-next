"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  expensePreferencesOptions,
  incomePreferencesOptions,
  budgetPreferncesOptions,
  IPreferencesOption,
} from "@/const";
import { Switch } from "@/components/ui/switch";
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
import { ArrowRight } from "lucide-react";
const SelectPreferences = () => {
  const [incomePreferenceState, setIncomePreferenceState] = useState<
    IPreferencesOption[]
  >(incomePreferencesOptions);
  const [expensePreferenceState, setExpensePreferenceState] = useState<
    IPreferencesOption[]
  >(expensePreferencesOptions);

  const handleIncomeCheckChange = (id: string, checked: boolean) => {
    setIncomePreferenceState((prevState) =>
      prevState.map((item) =>
        item.id === id ? { ...item, checked: checked } : item
      )
    );
  };
  const handleExpenseCheckChange = (id: string, checked: boolean) => {
    setExpensePreferenceState((prevState) =>
      prevState.map((item) =>
        item.id === id ? { ...item, checked: checked } : item
      )
    );
  };
  const [budgetState, setBudgetState] = useState<string>("Monthly");
  const handleSelectChange = (selected: string) => {
    setBudgetState(selected);
  };
const handleNextStep = ()=>{
  console.log('loading next step...')
}
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 flex-col">
      <div className="flex flex-col gap-[20px] px-[40px] py-[40px] w-[700px] bg-white shadow-md rounded-lg">
        <p className="text-sm text-center">
          Select your preferences to get started. You can always update them
          later.
        </p>
        <div className="flex flex-col gap-[10px] text-sm">
          <p className="text-red-500 font-bold">Expense Categories</p>
          {expensePreferenceState.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center p-[10px] border-b border-gray-200"
            >
              <p className="text-sm">{item.category}</p>
              <Switch
                checked={item.checked}
                onCheckedChange={(checked: boolean) =>
                  handleExpenseCheckChange(item.id, checked)
                }
              />
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-[10px] text-sm">
          <p className="text-green-500 font-bold">Income Sources</p>
          {incomePreferenceState.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center p-[10px] border-b border-gray-200"
            >
              <p className="text-sm">{item.category}</p>
              <Switch
                checked={item.checked}
  
                onCheckedChange={(checked: boolean) =>
                  handleIncomeCheckChange(item.id, checked)
                }
              />
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-[10px]">
          <p className="flex text-sm">How oftently do you want to track your budget?</p>
          <Select onValueChange={handleSelectChange}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select time period" />
            </SelectTrigger>
            <SelectContent className="w-full bg-white shadow-md rounded-lg">
              <SelectGroup>
                <SelectLabel className="text-sm font-bold ">
                  Budget Preferences
                </SelectLabel>
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
        <Button variant='outline' title="Get Started" icon={<ArrowRight className="h-[20px] ml-[10px]"/>} onClick={handleNextStep}/>
      </div>
    </div>
  );
};

export default SelectPreferences;
