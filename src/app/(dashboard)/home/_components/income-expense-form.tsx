'use client'
import React, {useState} from 'react'
import Button from '@/app/components/Button/button'
import Input from '@/app/components/Input/input'
import Select from '@/app/components/Select/select'

const IncomeExpenseForm = () => {
  const incomeList = ["Stocks", "Salary", "Freelancing", "Investments", "Bonuses", "Rental Income", "Dividends"];
  const expenseList = ["Rent", "Utilities", "Groceries", "Transportation", "Entertainment", "Insurance", "Healthcare", "Dining Out", "Education", "Miscellaneous"];
  
  return (
    <div className='bg-white w-[502px] flex flex-col px-[30px] py-[40px] mt-[20px] ml-[20px] gap-[30px]'>
      <p className='text-red-500 text-center font-bold'>Expense</p>
        <Select options={expenseList}/>
        <Input placeholder='Enter Amount'/>
        <Button text='Add Income'/>

    </div>
  )
}

export default IncomeExpenseForm