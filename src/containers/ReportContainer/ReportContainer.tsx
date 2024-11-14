"use client";
import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { backendRequests } from "@/request";
import { useSession } from "next-auth/react";
import { ReportDataT } from "@/types";
import { Button } from "@/components/ui/button";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
const ReportContainer = () => {
  const [reportData, setReportData] = useState<ReportDataT>();
  const session = useSession();
  const token = session.data?.user?.token;
  const getData = async () => {
    try {
      const response = await axios(backendRequests.summaryReportUrl, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setReportData(response.data);
    } catch (error) {
      console.log("Error occured", error);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  const handlePdfDownload = () => {
    const reportContent = document.getElementById("report-content");
    if (reportContent) {
      html2canvas(reportContent).then((canvas) => {
        const imgData = canvas.toDataURL("image/png");
        const pdf = new jsPDF();
        pdf.addImage(imgData, "PNG", 60, 40, 100, 70);
        pdf.save("report.pdf");
      });
    } else {
      console.log("Document not found!");
    }
  };

  return (
    <div
      id="summary-card"
      className="w-[700px] mx-auto p-6 bg-white shadow-md rounded-lg border border-gray-200 gap-4 flex flex-col"
    >
   
      <div className="space-y-3" id="report-content">
      <h2 className="text-2xl font-bold  text-center">Account Summary</h2>
        <p className="flex justify-between">
          <strong>Total Transactions:</strong>
          <span id="total-transactions">{reportData?.total_transactions}</span>
        </p>
        <p className="flex justify-between">
          <strong>Total Income:</strong>
          <span id="total-income">{reportData?.total_income}</span>
        </p>
        <p className="flex justify-between">
          <strong>Total Expense:</strong>
          <span id="total-expense">{reportData?.total_expense}</span>
        </p>
        <p className="flex justify-between">
          <strong>Net Balance:</strong> <span id="net-balance"></span>
          {reportData?.net_balance}
        </p>
        <p className="flex justify-between">
          <strong>Top Income Category:</strong>
          <span id="top-income-cat">
            {reportData?.top_income_cat?.category}
          </span>
        </p>
        <p className="flex justify-between">
          <strong>Top Expense Category:</strong>
          <span id="top-expense-cat">
            {reportData?.top_expense_cat?.category}
          </span>
        </p>
        <p className="flex justify-between w-full p-2">
          <strong>Summary:</strong>
          <span>
            This will contain a detail summary about how u are doing financially
            prob generated by an AI or it will be manually generated using some
            function either way it is just a summary donot use it to make ur
            financia decisions.
          </span>
        </p>
      </div>
      <Button
        title="Download PDF"
        className="w-full"
        onClick={handlePdfDownload}
      />
    </div>
  );
};

export default ReportContainer;
