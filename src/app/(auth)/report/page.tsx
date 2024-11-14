'use client'
import React from "react";
import { PDFViewer } from '@react-pdf/renderer';
import ReportContainer from "@/containers/ReportContainer/ReportContainer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const ReportPage = () => {
  return (
    <div>
      <Tabs defaultValue="account" className="w-200">
        <TabsList>
          <TabsTrigger value="account">Weekly Report</TabsTrigger>
          <TabsTrigger value="password">Monthly Report</TabsTrigger>
          <TabsTrigger value="pass">Yearly Report</TabsTrigger>
        </TabsList>
        <TabsContent value="account">
     <ReportContainer/>
        </TabsContent>
        <TabsContent value="password">Monthly Report.</TabsContent>
        <TabsContent value="pass">Yearly Report.</TabsContent>
      </Tabs>
    </div>
  );
};

export default ReportPage;
