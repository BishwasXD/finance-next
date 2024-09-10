"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Datepicker from "@/components/ui/datepicker";
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

const transactionFormSchema = z.object({
  date: z.date(),
  category: z.string().min(1, { message: "Please select a category" }),
  description: z.string(),

  amount: z
    .number({
      required_error: "Amount is required",
      invalid_type_error: "Amount must be a number",
    })
    .gt(0, { message: "Amount cannot be negative" }),
});

const AddTransactionForm = () => {
  const [date, setSelectedDate] = useState<Date | undefined>(new Date());
  const [selectedField, setSelectedField] = useState<FieldType>("Income");

  const form = useForm<any>({
    defaultValues: {
      date: date,
      category: "",
      description: "",
      amount: undefined,
    },
    resolver: zodResolver(transactionFormSchema),
  });

  const {
    handleSubmit,
    register,
    setValue,
    formState: { errors },
  } = form;
  console.log("ERROR", errors.category?.message);
  const onSubmit = (data: any) => {
    console.log("form submitted", data);
  };

  return (
    <div className="pl-[150px]">
      <div className="w-[650px] border shadow-md px-[40px] py-[50px] rounded-md">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col gap-[20px]">
            <Datepicker
              className="!bg-white"
              date={date}
              handleDateSelection={(selectedDate) => {
                setSelectedDate(selectedDate);
                setValue("date", selectedDate);
              }}
            />
            <Input
              placeholder="Add amount..."
              {...form.register("amount", { valueAsNumber: true })}
              type="number"
            />{" "}
            {errors.amount && (
              <p className="text-red-500 text-sm">{errors?.amount?.message}</p>
            )}
            <SelectField
              selectedField={selectedField}
              setSelectedField={setSelectedField}
            />
            <Select onValueChange={(value) => setValue("category", value)}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                {CategoriesOptions[selectedField].map((item) => (
                  <SelectItem key={item.name} value={item.name}>
                    <div className="flex gap-[5px] px-[5px] cursor:pointer">
                      {item.icon} <p>{item.name}</p>
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
              {errors.category && (
                <p className="text-red-500 text-sm">
                  {errors.category?.message}
                </p> //TODO: works but need to look the error showing
              )}
            </Select>
            <Input
              placeholder="Add description..."
              {...register("description")}
            />
            <Button title="Add Transaction" type="submit" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddTransactionForm;
