import React from 'react'
import NavBar from '@/containers/Navbar/navbar'
import IncomeExpenseForm from './_components/income-expense-form'

const HomeRoute = () => {
  return (
    <div>
      <NavBar/>
      <IncomeExpenseForm/>

    </div>
  )
}

export default HomeRoute