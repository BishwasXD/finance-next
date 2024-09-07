'use client'
import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { backendRequests } from '@/request'
import ReactApexChart from "react-apexcharts";
import { ApexOptions } from "apexcharts";

const PieChart = () => {
    const [incomeData, setIncomeData] = useState([])
    const [expenseData, setExpenseData] = useState([])
    useEffect(()=>{
        fetchData()
    },[])
    const fetchData = async() => {
        try{
        const res = await axios.get(backendRequests.getPieChartDataUrl)
        setIncomeData(res.data.data.income_data)
        setExpenseData(res.data.data.expense_data)
        }
        catch(error){
            console.log('Error occured', error)
        }
        
    }
    const expenseLabels = Object.keys(expenseData)
    const expenseAmount = Object.values(expenseData)
    const incomeLabels = Object.keys(incomeData)
    const incomeAmount = Object.values(incomeData)

 
    const expenseOptions = {
    
            
            labels: expenseLabels,
    
    }as ApexOptions;
    const incomeOptions = {
    
            
        labels: incomeLabels,

}as ApexOptions;
  return (
    <div className='flex gap-sm'>
      
    <ReactApexChart  options={expenseOptions} series={expenseAmount}  type='pie' width={500}/>
    <ReactApexChart  options={incomeOptions} series={incomeAmount}  type='pie' width={500}/>
    </div>
  )
}

export default PieChart