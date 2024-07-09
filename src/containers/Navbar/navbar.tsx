"use client";
import React from "react";
import { Upload, Download, ClipboardMinus, Moon, Sun } from "lucide-react";
import axios from "axios";
import { getCsvUrl } from "@/requests/financeRequests";
const NavBar = () => {
  const sendExportCsvRequest = async () => {
    try {
      const response = await axios.get(getCsvUrl, {
        responseType: "blob",
      });

      const blob = new Blob([response.data], { type: "text/csv" });
      console.log(blob)
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "income_data.csv";
      document.body.appendChild(a);
      a.click();
      a.remove();
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="w-full flex h-[70px] bg-white items-center gap-[150px] shadow-md justify-between px-[20px]">
      <p className="ml-[30px]">
        Welcome, <strong>Username</strong>
      </p>
      <div className="flex gap-[40px]">
        <div className="flex items-center gap-[10px] cursor-pointer">
          <Upload />
          <p>Upload CSV</p>
        </div>
        <div
          className="flex items-center gap-[10px] cursor-pointer"
          onClick={sendExportCsvRequest}
        >
          <Download />
          <p>Export CSV</p>
        </div>
        <div className="flex items-center gap-[10px] cursor-pointer">
          <ClipboardMinus />
          <p>Report</p>
        </div>
        <div className="flex items-center gap-[10px] cursor-pointer">
          <Sun />
          <p className="text-sm">Dark</p>
        </div>
      </div>
      <div className="flex flex-col justify-end">
        <p className="text-green-500">Income:100</p>
        <p className="text-red-500">Expense:1000</p>
      </div>
    </div>
  );
};

export default NavBar;
