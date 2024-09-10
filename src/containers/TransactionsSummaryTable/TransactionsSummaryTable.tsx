'use client'
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
import { NotebookPen,Trash } from 'lucide-react';

import { useMemo, useEffect, useState } from "react";
import axios from "axios";
import { backendRequests } from "@/request";

const TransactionsSummaryTable = () => {
 const defTableVal = [{field:'-',category:'-',amount:'-',date:'-',description:'-'}]
  const [tableData, setTableData] = useState(defTableVal);
  const fetchData = async () => {
    try {
      const res = await axios.get(backendRequests.getTableSummaryData);
      console.log('DATA', res.data.data)
      setTableData(res.data.data);
    } catch (error) {
      console.log("ERROR", error);
    }
  };
  useEffect(()=>{
fetchData()
  },[])

  return (
    <div>
      <Table>
        <TableCaption>Your Transaction History.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Index</TableHead>
            <TableHead>Type</TableHead>
            <TableHead>Category</TableHead>
            <TableHead>Amount</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
        {tableData?.map((item, index) => (
          <TableRow>
         
              
                <TableCell>{index}</TableCell>
                <TableCell>{item.field}</TableCell>
                <TableCell>{item.category}</TableCell>
                <TableCell>{item.amount}</TableCell>
                <TableCell>{item.date.split('T')[0]}</TableCell>
                <TableCell><div className="flex gap-[20px] cursor-pointer"><NotebookPen className="text-blue-600 hover:text-blue-400" /><Trash className="text-red-600 hover:text-red-400"/></div></TableCell>
              
           
          </TableRow>
           ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default TransactionsSummaryTable;
