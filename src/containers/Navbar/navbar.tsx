"use client";
import React, { useEffect, useState } from "react";
import { Upload, Download, Moon, Sun, LogOut, User } from "lucide-react";
import axios from "axios";
import { backendRequests } from "@/request";
import { useTheme } from "next-themes";
import { useSession } from "next-auth/react";
import { ConfirmationPopover } from "@/components/ConfirmationPopover";
const NavBar = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const session = useSession();
  const email = session ? session?.data?.user?.email : "example@gmail.com";
  // useEffect(() => {
  //   setMounted(true);
  // }, []);

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

  // if (!mounted) return null;

  return (
    <div className="flex  bg-white px-[20px] dark:bg-dark_mode fixed right-0 top-0 z-[50] left-[100px] justify-end  overflow-hidden border-b">
      <div className="flex gap-[40px] items-center">
        <div className="flex items-center gap-[10px] cursor-pointer">
          <Upload />
        </div>
        <div
          className="flex items-center gap-[10px] cursor-pointer"
          onClick={sendExportCsvRequest}
        >
          <Download />
        </div>
        <div className="flex items-center h-[70px]">
          <div className="border rounded-full border-blue-900 w-[35px] h-[35px] flex justify-center items-center bg-gray-50 hover:bg-gray-100 cursor-pointer">
            <User className="dark:text-black" />
          </div>
          <div className="flex flex-col ml-2">
            <h3 className="text-sm font-bold">{email?.split("@")[0]}</h3>
            <p className="text-sm text-gray-500">{email}</p>
          </div>
        </div>
        <div
          className="flex items-center gap-[10px] cursor-pointer"
          onClick={handleThemeSwitch}
        >
          {theme === "light" ? <Moon /> : <Sun />}
        </div>

        <ConfirmationPopover
          title="Are you sure you want to logout ?"
          trigger={<LogOut className="hover:text-red-600 cursor-pointer" />}
          onConfirmClick={() => console.log("LOG OUT")}
        />
      </div>
    </div>
  );
};

export default NavBar;
