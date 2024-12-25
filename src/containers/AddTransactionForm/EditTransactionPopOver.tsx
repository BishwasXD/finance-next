"use client";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { NotebookPen } from "lucide-react";
import {
  Select,
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Datepicker from "@/components/ui/datepicker";
import { CategoriesOptions } from "@/select-items";
import { backendRequests } from "@/request";
import { useSession } from "next-auth/react";
import { FieldType } from "./AddTransactionForm";


//TODO:: FIX DATE ISSUE
export function EditTransactionPopOver({
  id,
  amount,
  type,
  tDate,
  category,
}: any) {
  console.log('TDATA', tDate)
  const transactionFormSchema = z.object({
    date: z.date(),
    category: z.string().min(1, { message: "Please select a category" }),
    description: z.string(),
    type: z.string().min(1, { message: "Please select transaction type" }),
    amount: z
      .number({
        required_error: "Amount is required",
        invalid_type_error: "Amount must be a number",
      })
      .gt(0, { message: "Amount cannot be negative" }),
  });
  type ITransactionType = z.infer<typeof transactionFormSchema>;

  const session = useSession();
  const token = session.data?.user?.user_id;
  const [date, setSelectedDate] = useState<Date | undefined>(tDate);
  const [tType, setTType] = useState<string>(type);
  const [cat, setCategory] = useState<string>(category);
  const [isPopoverOpen, setIsPopoverOpen] = useState<boolean>(false)
  const defaultValues = {
    date: date,
    category: category,
    type: type,
    amount: amount,
    description: "",
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
    console.log("SUBMITTED", data);
    try {
      await axios.put(`${backendRequests.editTransactionUrl}/${id}/${tType}/`, {
        ...data,
        user: token, //TODO: ADD TOKEN INSTEAD OF THIS
      });
      setIsPopoverOpen(false)
      toast.success("Transaction edited successfully");
    } catch (error) {
      toast.error("Something went wrong!");
      console.log("ERROR OCCURED", error);
    }
  };


  return (
    <Popover open={isPopoverOpen} onOpenChange={setIsPopoverOpen}>
      <PopoverTrigger asChild>
        <NotebookPen
          aria-label="Edit Transaction"
          className="text-blue-600 hover:text-blue-400"
        />
      </PopoverTrigger>
      <PopoverContent className="w-[300px]">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col gap-2 w-full">
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
            <Select
              onValueChange={(value) => {
                setValue("category", value);
                setTType(value);
              }}
              value={tType}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Transaction Type" />
              </SelectTrigger>
              <SelectContent>
                {["Income", "Expense", "Investment", "Saving"].map((item) => (
                  <SelectItem key={item} value={item}>
                    <p>{item}</p>
                  </SelectItem>
                ))}
              </SelectContent>
              {errors.category && (
                <p className="text-red-500 text-sm">
                  {errors.category?.message}
                </p>
              )}
            </Select>
            <Select
              onValueChange={(value) => {
                setValue("category", value);
                setCategory(value);
              }}
              value={cat}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                {CategoriesOptions[tType as FieldType].map((item) => (
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
                </p>
              )}
            </Select>
            <Input
              placeholder="Add description..."
              {...register("description")}
            />
            <Button title="Edit Transaction" type="submit" />
          </div>
        </form>
      </PopoverContent>
    </Popover>
  );
}
