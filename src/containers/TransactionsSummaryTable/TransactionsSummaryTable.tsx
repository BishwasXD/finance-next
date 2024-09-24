"use client";
import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { NotebookPen, Trash } from "lucide-react";
import { useTransactionTable } from "@/hooks/useTransactionTable";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useRouter } from "next/navigation";
const TransactionsSummaryTable = ({showAll=false}) => {
const router = useRouter()
const {data, isError, isLoading} = useTransactionTable()

if (isError){
  return  <div>Something went wrong, try refreshing</div>
}

const tableColumn = ['Index','Type','Category','Amount','Date','Actions']
  return (
  <div className="w-full flex flex-col items-center justify-center py-10 gap-4 h-[600px]">
     <p className="text-blue-500 items-center justify-center font-semibold inline-block">
        Your Transaction History
        <span className="block h-[2px] w-full bg-blue-300 mt-1"></span>
      </p>
      <Table>
        <TableHeader> 
          <TableRow>
           {tableColumn.map((item)=><TableHead key={item}>{item}</TableHead>)}
          </TableRow>
        </TableHeader>
        <TableBody>
          {!isLoading ? (!showAll ? data?.slice(0,5):data).map((item, index) => (
            <TableRow key={index}>
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
      {!showAll &&
      <Link href={"/report"}>
      <Button title="Show More" onClick={() => router.push('/report')}/>
      </Link>
}
    </div>
  );
};

export default TransactionsSummaryTable;
