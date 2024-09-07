"use client";
import React, { useEffect, useState } from "react";
import { Upload, Download, Moon, Sun, LogOut, User } from "lucide-react";
import axios from "axios";
import { backendRequests } from "@/request";
import { useTheme } from "next-themes";

const NavBar = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const sendExportCsvRequest = async () => {
    try {
      const response = await axios.get(backendRequests.downloadCsvUrl, {
        responseType: "blob",
      });

      const blob = new Blob([response.data], { type: "text/csv" });
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

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  if (!mounted) return null;

  return (
<div className="flex h-[70px] bg-white px-[20px] dark:bg-dark_mode fixed right-0 left-[300px] justify-end w-[calc(100%-300px)] overflow-hidden">
  <div className="flex gap-[40px] items-center">
    <div className="flex items-center gap-[10px] cursor-pointer">
      <Upload />
    </div>
    <div className="flex items-center gap-[10px] cursor-pointer" onClick={sendExportCsvRequest}>
      <Download />
    </div>
    <div className="flex items-center h-[70px]">
      <div className="border rounded-full border-blue-900 w-[35px] h-[35px] flex justify-center items-center bg-gray-50 hover:bg-gray-100 cursor-pointer">
        <User />
      </div>
      <div className="flex flex-col ml-2">
        <h3 className="text-sm font-bold">Example Name</h3>
        <p className="text-sm text-gray-500">example@gmail.com</p>
      </div>
    </div>  
    <div className="flex items-center gap-[10px] cursor-pointer" onClick={handleThemeSwitch}>
      {theme === "light" ? <Moon /> : <Sun />}
    </div>
    <LogOut className="hover:text-red-600 cursor-pointer" />
  </div>
</div>


  );
};

export default NavBar;
