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

interface CustomTableProps {
  tableTitle: string;
  tableRow: string[];
  tableData: any[];
}
const CustomTable = ({
  tableData,
  tableRow,
  tableTitle
}: CustomTableProps) => {
  return (
    <Table>
      <TableCaption>{tableTitle}</TableCaption>
      <TableHeader>
        {tableRow.map((item, index) => (
          <TableRow key={item}>
            <TableHead>{item}</TableHead>
          </TableRow>
        ))}
      </TableHeader>
      <TableBody>
        {tableData.map((item, index) => (
          <TableRow key={item}>
            <TableCell>{item}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default CustomTable;
