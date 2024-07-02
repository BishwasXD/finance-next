import React, {SelectHTMLAttributes} from 'react'

interface ISelectProps extends SelectHTMLAttributes<HTMLInputElement>{
  options: string[]
}

const Select = ({options}:ISelectProps) => {
  return (
    <select className='text-sm flex items-center justify-center p-[8px] h-[55px] gap-3 rounded-[4px] w-full border-[2px] bg-white border-gray-200 hover:border-blue-500'>
      {
        options.map(item => <option id={item}>{item}</option>)
      }
    </select>
  )
}

export default Select