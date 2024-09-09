"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Datepicker from "@/components/ui/datepicker";
import { useState } from "react";
import SelectField from "@/components/ui/selectfield";
import {
  Select,
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { CategoriesOptions } from "@/select-items";
export type FieldType = "Expense" | "Income" | "Investment" | "Saving";
const AddTransactionForm = () => {
  const [date, setSelectedDate] = useState<Date>();
  const [selectedField, setSelectedField] = useState<FieldType>("Income");
  const transactionFormSchema = z.object({
    date: z.date(),
    category: z.string().nonempty({ message: "This Field is required" }),
    description: z.string(),
    amount: z
      .number()
      .min(0, { message: "Amount cannot be negative" })
      .nonnegative({ message: "Amount must be 0 or greater" })
      .refine((value) => value !== undefined && value !== null, {
        message: "Amount cannot be empty",
      }),
  });

  const form = useForm<any>({
    defaultValues: {},
    resolver: zodResolver(transactionFormSchema),
  });
  const handleTransactionFormSubmit = (data: any) => {
    console.log("form submiitted", data);
  };
  return (
    <div className="px-[150px]">
      <div className="w-[570px] border shadow-md px-[40px] py-[50px] rounded-md">
        <form action="" onSubmit={handleTransactionFormSubmit}>
          <div className="flex flex-col gap-[20px]">
            <Datepicker
              className="!bg-white"
              date={date}
              handleDateSelection={(selectedDate) =>
                setSelectedDate(selectedDate)
                
              }
            />

            <Input
              placeholder="Add amount..."
              type="number"
              {...form.register("amount")}
            />
            <SelectField
              selectedField={selectedField}
              setSelectedField={setSelectedField}
            />
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                {CategoriesOptions[selectedField].map((item) => (
                  <SelectItem value={item.name}>
                    <div className="flex gap-[5px] px-[5px]  cursor:pointer">
                      {item.icon} <p>{item.name}</p>
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Input
              placeholder="Add description..."
              {...form.register("description")}
            />
            <Button title="Add Transaction" type="submit" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddTransactionForm;
