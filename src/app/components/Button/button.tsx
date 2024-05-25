import React from 'react'

interface IBUTTONPROPS{
    text?:string,
    disabled?:boolean
    variant?:string

  }

const variants = {
    "sm": 'h-[35px] w-[135px]',
    "lg":'h-[50px] w-[200px]',
    "xl":'h-'
}
const Button= ({text, disabled, variant}:IBUTTONPROPS) => {

 
  return (
   <button className='border-[1px] border-black bg-gray-50' disabled={disabled}>
    {text}
   </button>
  )
}

export default Button