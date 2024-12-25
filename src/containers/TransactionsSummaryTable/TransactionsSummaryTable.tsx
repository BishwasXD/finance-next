"use client";
import React from "react";
import ReactLoader from 'react-loading'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import toast from "react-hot-toast";
import { Trash } from "lucide-react";
import { useTransactionTable } from "@/hooks/useTransactionTable";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { EditTransactionPopOver } from "../AddTransactionForm/EditTransactionPopOver";
import axios from "axios";
import { backendRequests } from "@/request";
import { ConfirmationPopover } from "@/components/ConfirmationPopover";


const TransactionsSummaryTable = ({ showAll = false }) => {
  const router = useRouter();
  const { data, isError, isLoading } = useTransactionTable();
  console.log("TRANSACTION DATA IS", data);

  if (isError) {
    return <div>Something went wrong, try refreshing</div>;
  }

  const tableColumn = [
    "Index",
    "Type",
    "Category",
    "Amount",
    "Date",
    "Actions",
  ];

  const handleConfirmDeleteClick = async (id:number, type:string) => {
    console.log('DELETE CLICKED')
    try {
      const res = await axios.delete(
        `${backendRequests.editTransactionUrl}/${id}/${type}/`
      );
      console.log(res.data.message);
      toast.success(res.data.message)
    } catch (error) {
      console.log("ERROR", error);
    }
  };
  let dataSize = data.length
  console.log("size of a data is", dataSize)
  return (
    <div className="w-full flex flex-col items-center justify-center py-10 gap-4 h-[600px]">
      <p className="text-blue-500 items-center justify-center font-semibold inline-block">
        Your Transaction History
        <span className="block h-[2px] w-full bg-blue-300 mt-1"></span>
      </p>
      <Table>
        <TableHeader>
          <TableRow>
            {tableColumn.map((item) => (
              <TableHead key={item}>{item}</TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {!isLoading ? (
            (!showAll ? data?.slice(0, 5) : data).map((item, index) => (
              <TableRow key={item.id}>
                <TableCell>{index}</TableCell>
                <TableCell>{item.field}</TableCell>
                <TableCell>{item.category}</TableCell>
                <TableCell>{item.amount}</TableCell>
                <TableCell>
                  {new Date(item.date).toLocaleDateString()}
                </TableCell>

                <TableCell>
                  <div className="flex gap-[20px] cursor-pointer">
                    <EditTransactionPopOver
                      id={item.id}
                      type={item.field}
                      category={item.category}
                      amount={item.amount}
                      tDate={item.date}
                    />

                    <ConfirmationPopover
                      title="Are you sure you want to delete this transaction"
                      trigger={ <Trash className="text-red-600 hover:text-red-400 cursor-pointer" />}
                      onConfirmClick={() => handleConfirmDeleteClick(item.id, item.field)}
                    />
                  </div>
                </TableCell>
              </TableRow>
            ))
          ) : (
            <ReactLoader type="bars" width={'5%'} height={'5%'} color="#ADD8E6"/>
          )}
        </TableBody>
      </Table>
{(!showAll && dataSize > 5) && (
  <Button
    title="Show More"
    onClick={() => router.push("/home/table")}
    className="dark:bg-gray-600 dark:hover:bg-gray-700"
  />
)}    </div>
  );
};

export default TransactionsSummaryTable;
