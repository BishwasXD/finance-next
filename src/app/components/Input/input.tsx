import React from 'react'

interface IINPUTPROPS{
    type: string
    icon?: string
    placeholder?: string
    id?:string
}

const Input = React.forwardRef<HTMLInputElement, IINPUTPROPS>(({ type, icon, placeholder, id }, ref) => {
  return (
    <div>
        <input
          ref={ref}
          type={type}
          className='text-sm border-[2px] border-gray-200 w-full p-[8px] h-[55px] rounded-[4px] bg-white text-black placeholder-gray-400 focus:border-blue-500 focus:outline-none'
          placeholder={placeholder}
          id={id}
          
        />
    </div>
  )
})

export default Input
