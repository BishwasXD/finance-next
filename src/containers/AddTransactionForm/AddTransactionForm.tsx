'use client'
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import Datepicker from "@/components/ui/datepicker";
import { useState } from "react";
import SelectField from "@/components/ui/selectfield";
const AddTransactionForm = () => {
  const [date, setSelectedDate] = useState<Date>()
  const transactionFormSchema = z.object({
    date: z.date(),
    category: z.string().nonempty({ message: "This Field id required" }),
    description: z.string(),
    amount: z
      .number()
      .min(0, { message: "Amount cannot be negative" })
      .nonnegative({ message: "Amount must be 0 or greater" })
      .refine((value) => value !== undefined && value !== null, {
        message: "Amount cannot be empty",
      }),
  });

//   const form = useForm<any>({
//     defaultValues: {},
//     resolver: zodResolver(transactionFormSchema),
//   });
  return (
    <div className="px-[150px]">
    <div className="w-[570px] border shadow-md px-[30px] py-[40px] rounded-md">
      <form action="">
        <div className="flex flex-col gap-[20px]">
        <Datepicker className="!bg-white" date={date} handleDateSelection={selectedDate => setSelectedDate(selectedDate) }/>
          <SelectField/>
        <Input placeholder="Add amount..." />
        <Input placeholder="here goes select component"/>
        <Input placeholder="Add description..." />
        <Button title="Add Transaction" />
        </div>
      </form>
    </div>
    </div>
  );
};

export default AddTransactionForm;
