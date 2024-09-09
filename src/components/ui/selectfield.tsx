import React, { useState } from "react";
import {
  MoveDownLeft,
  MoveUpRight,
  TrendingUp,
  BadgeDollarSign,
} from "lucide-react";
import { FieldType } from "@/containers/AddTransactionForm/AddTransactionForm";
type SelectedFieldProps = {
  selectedField: FieldType
  setSelectedField: (val:FieldType) => void
}
const SelectField = ({setSelectedField, selectedField}:SelectedFieldProps) => {
 

  const fieldOptions = [
    {
      id: 1,
      title: "Income",
      icon: <MoveDownLeft className="text-green-500" />,
    },
    {
      id: 2,
      title: "Expense",
      icon: <MoveUpRight className="text-red-500"/>,
    },
    {
      id: 3,
      title: "Investment",
      icon: <TrendingUp className="text-blue-500"/>,
    },
    {
      id: 4,
      title: "Saving",
      icon: <BadgeDollarSign className="text-yellow-500"/>,
    },
  ];
  const handleSelect = (title:FieldType) => {
    setSelectedField(title);
  };

  return (
    <div className="flex border rounded-md bg-gray-200 justify-between">
      {fieldOptions.map((item) => (
        <div key={item.id} className="">
          <div
            className={`flex gap-[5px] cursor-pointer py-[10px] px-[10px] ${
              selectedField === item.title ? "bg-white border-r rounded-md" : ""
            }`} 
            onClick={() => handleSelect(item.title as FieldType)} 
          >
            {item.icon}
            <p>{item.title}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SelectField;
