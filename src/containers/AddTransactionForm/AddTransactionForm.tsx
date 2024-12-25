"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
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
import { backendRequests } from "@/request";
import { useSession } from "next-auth/react";

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
type ITransactionType = z.infer<typeof transactionFormSchema>;

const AddTransactionForm = () => {
  const session = useSession();
  const token = session.data?.user?.user_id;
  const [date, setSelectedDate] = useState<Date | undefined>(new Date());
  const [selectedField, setSelectedField] = useState<FieldType>("Income");
  const defaultValues = {
    date: date,
    category: "",
    description: "",
    amount: undefined,
  };

  const form = useForm<ITransactionType>({
    defaultValues: defaultValues,
    resolver: zodResolver(transactionFormSchema),
  });

  const {
    handleSubmit,
    register,
    setValue,
    formState: { errors },
  } = form;
  const onSubmit = async (data: ITransactionType) => {
    try {
      await axios.post(`${backendRequests.addTransactions}/${selectedField}/`, {
        ...data,
        user: token, //TODO: ADD TOKEN INSTEAD OF THIS
      });
      form.reset();
      toast.success("Transaction added successfully");
    } catch (error) {
      toast.error("Something went wrong!");
      console.log("ERROR OCCURED", error);
    }
  };

  return (
    <div className="w-[660px] border shadow-md px-10 py-10 rounded-md">
      <Toaster />
      <p className="text-blue-500 mb-12 items-center justify-center font-semibold inline-block">
        Add your Transaction
        <span className="block h-[2px] w-full bg-blue-300 mt-1"></span>
      </p>
       
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-[20px]">
          <Datepicker
            date={date}
            handleDateSelection={(selectedDate) => {
              setSelectedDate(selectedDate);
              setValue("date", selectedDate);
            }}
            triggerClassName="w-full"
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
              <p className="text-red-500 text-sm">{errors.category?.message}</p>
            )}
          </Select>
          <Input
            placeholder="Add description..."
            {...register("description")}
          />
          <Button title="Add Transaction" className="dark:text-white dark:bg-gray-600 dark:hover:bg-gray-700" type="submit" />
        </div>
      </form>
  
  
    </div>
  );
};

export default AddTransactionForm;
