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
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>S.N.</TableHead>
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
                <TableCell>{item.date}</TableCell>
                <TableCell>{item.description}</TableCell>
              
           
          </TableRow>
           ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default TransactionsSummaryTable;
