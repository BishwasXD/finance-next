
'use client'
import React from 'react';
import Button from '@/app/components/Button/button';
import Input from '@/app/components/Input/input';
import { LinkedinIcon } from 'lucide-react';

const AuthForm = () => {
  const handleLogin = () => {
    console.log("This is now a login page");
  };

 

  return (
    <div className="flex flex-col gap-[30px] bg-white px-[30px] py-[40px] mt-[20px] mr-[20px] rounded-lg shadow-md float-end">
      <div className="flex flex-col text-center gap-[14px]">
        <p className="font-bold text-xl">Welcome to Track My Finance</p>
        <p className="text-sm text-gray-600">
          Easily manage and visualize your daily expenses and incomes with intuitive graphs and charts.
        </p>
      </div>
      <div className="flex gap-4 items-center justify-center">
        <Button text="Sign Up with Facebook" icon={<LinkedinIcon className="text-blue-600" />} />
        <Button text="Sign Up with Google" icon={<LinkedinIcon className="text-blue-600" />} />
      </div>
      <p className="flex text-center justify-center font-extralight text-gray-500">
        ------- Or Sign Up with an Email -------
      </p>
      <div className="flex flex-col gap-[20px]">
        <label htmlFor="email" className="text-sm font-medium">Email</label>
        <Input id="email" type="text" placeholder="Enter your Email" />
        <label htmlFor="password" className="text-sm font-medium">Password</label>
        <Input id="password" type="password" placeholder="Enter Password" />
        <label htmlFor="confirm-password" className="text-sm font-medium">Confirm Password</label>
        <Input id="confirm-password" type="password" placeholder="Confirm Password" />
      </div>
      <p className="text-center">
        Already have an account?{" "}
        <strong
          className="text-blue-600 cursor-pointer hover:text-blue-500"
          onClick={handleLogin}
        >
          Login
        </strong>
      </p>
      <Button text="Sign Up" />
      <p className="font-light text-center text-gray-600 text-sm mt-4">
        By signing up, you agree to accept our terms and conditions.
      </p>
    </div>
  );
};

export default AuthForm;
