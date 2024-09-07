import React, { useState } from "react";
import {
  MoveDownLeft,
  MoveUpRight,
  TrendingUp,
  BadgeDollarSign,
} from "lucide-react";

const SelectField = () => {
  // State to track the selected field
  const [selectedField, setSelectedField] = useState(null);

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
  const handleSelect = (id:any) => {
    setSelectedField(id);
  };

  return (
    <div className="flex border rounded-md bg-gray-200 justify-between">
      {fieldOptions.map((item) => (
        <div key={item.id} className="">
          <div
            className={`flex gap-[5px] cursor-pointer py-[10px] px-[10px] ${
              selectedField === item.id ? "bg-white border-r rounded-md" : ""
            }`} 
            onClick={() => handleSelect(item.id)} 
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
