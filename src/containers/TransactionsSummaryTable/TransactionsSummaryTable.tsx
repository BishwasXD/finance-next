"use client";
import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { NotebookPen, Trash } from "lucide-react";
import { useTransactionTable } from "@/hooks/useTransactionTable";

const TransactionsSummaryTable = () => {

const {data, isError, isLoading} = useTransactionTable()

if (isError){
  return  <div>Something went wrong, try refreshing</div>
}

const tableColumn = ['Index','Type','Category','Amount','Date','Actions']
  return (
    <div className="w-full">
      <Table>
        <TableCaption>Your Transaction History.</TableCaption>
        <TableHeader> 
          <TableRow>
           {tableColumn.map((item)=><TableHead>{item}</TableHead>)}
          </TableRow>
        </TableHeader>
        <TableBody>
          {!isLoading ? data?.map((item, index) => (
            <TableRow>
              <TableCell>{index}</TableCell>
              <TableCell>{item.field}</TableCell>
              <TableCell>{item.category}</TableCell>
              <TableCell>{item.amount}</TableCell>
              <TableCell>{new Date(item.date).toLocaleDateString()}</TableCell>

              <TableCell>
                <div className="flex gap-[20px] cursor-pointer">
                  <NotebookPen
                    aria-label="Edit Transaction"
                    className="text-blue-600 hover:text-blue-400"
                  />
                  <Trash
                    aria-label="Delete Transaction"
                    className="text-red-600 hover:text-red-400"
                  />
                </div>
              </TableCell>
            </TableRow>
          )): <div>Loading...</div>}
        </TableBody>
      </Table>
    </div>
  );
};

export default TransactionsSummaryTable;
