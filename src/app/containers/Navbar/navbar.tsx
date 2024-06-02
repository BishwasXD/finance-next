import React from 'react'

const NavBar = () => {
  return (
    //TODO: fix this shit! add icons for csv and dark mode, add other fields aswell
    <div className='w-full flex h-[70px] bg-white items-center gap-[50px]'>
        <p className='ml-[30px]'>Welcome, <strong>Username</strong></p>
        <div className='flex '>
        <p>Upload CSV</p>
        <p>dark/light</p>
        </div>
        <div className='flex flex-col items-end'>
            <p className='text-green-500'>Income:100</p>
            <p className='text-red-500'>Expense:1000</p>

        </div>

    </div>
  )
}

export default NavBar