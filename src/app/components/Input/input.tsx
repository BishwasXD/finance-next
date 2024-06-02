import React,{InputHTMLAttributes} from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  icon?: string;
}


const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ icon, ...props }, ref) => {
    return (
      <div>
        <input
          ref={ref}
          className='text-sm border-[2px] border-gray-200 w-full p-[8px] h-[55px] rounded-[4px] bg-white text-black placeholder-gray-400 focus:border-blue-500 focus:outline-none'
          {...props} 
        />
      </div>
    );
  }
);

Input.displayName = 'Input';

export default Input;
