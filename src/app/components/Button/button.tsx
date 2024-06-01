import React, { ButtonHTMLAttributes } from 'react'

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    text?:string,
 
    variant?:string,
    icon?:JSX.Element,
    
  }

  const Button = React.forwardRef<HTMLButtonElement, IButtonProps>(({
    text,
   
    variant,
    icon,
    ...props
    
  }, ref
) => {
    return (
      <button
      //TODO: instead of constant bg color make different variant of button and pass it as a prop, also add adjustable size of button through prop.
        className = 'text-sm flex items-center justify-center p-[8px] h-[55px] gap-3 rounded-[4px] w-full border-[2px] border-gray-200 bg-blue-100 hover:border-blue-500 '
      
        ref = {ref}
       {...props}
      > 
        {icon}
        {text}
      </button>
    );
  });
  
export default Button