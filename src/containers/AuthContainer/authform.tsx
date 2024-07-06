"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { LinkedinIcon } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { passwordSchema, emailSchema } from "../../schema/authFormSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";
import axios from "axios";
import { signUpUrl, loginUrl } from "../../requests/authFormRequests";
import { signIn } from 'next-auth/react';

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState<boolean>(false);

  const formSchema = z.object({
    email: emailSchema,
    password: passwordSchema,
    confirmPassword: passwordSchema,
  });

  type Form = z.infer<typeof formSchema>;
  const form = useForm<Form>({ resolver: zodResolver(formSchema) });

  const onSubmit = async () => {
    const { confirmPassword, password, email } = form.getValues();

    console.log("submitted successfully", confirmPassword, password);

    try {
      const res = await axios.post(
        !isLogin ? signUpUrl : loginUrl,
        !isLogin
          ? {
              email: email,
              password: password,
              confirm_password: confirmPassword,
            }
          : { email: email, password: password }
      );
    
    } catch (error) {
      
    }
  };

    const handleGoogleSignIn = () => {
      signIn('google');

    };
  
  
  return (
    <div className="flex flex-col gap-[20px] bg-white px-[30px] py-[40px] mt-[20px] mr-[20px] rounded-lg shadow-md float-end w-[565px]">
      <div className="flex flex-col text-center gap-[14px]">
        <p className="font-bold ">Welcome to Track My Finance</p>
        <p className="text-sm text-gray-600">
          Easily manage and visualize your daily expenses and incomes with
          intuitive graphs and charts.
        </p>
      </div>
      <div className="flex gap-4 items-center justify-center">
        <Button
          title="Sign Up with Facebook"
          icon={<LinkedinIcon/>}
          variant='outline'
          className="flex gap-[10px]"
        />
        <Button
          title="Sign Up with Google"
          icon={<LinkedinIcon  />}
          variant='outline'
          className="flex gap-[10px]"
          onClick={handleGoogleSignIn}
        />
      </div>
      <p className="flex text-center justify-center font-extralight text-gray-500">
        ------- Or Sign Up with an Email --------
      </p>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-4">
          <div>
            <label htmlFor="email" className="text-sm">
              Email
            </label>

            <Input
              {...form.register("email")}
              id="email"
              type="text"
              placeholder="Enter your Email"
            />
          </div>
          <div>
            <label htmlFor="password" className="text-sm">
              Password
            </label>
            <Input
              {...form.register("password")}
              id="password"
              type="password"
              placeholder="Enter Password"
            />
          </div>
          {!isLogin && (
            <div>
              <label htmlFor="confirm-password" className="text-sm">
                Confirm Password
              </label>
              <Input
                {...form.register("confirmPassword")}
                id="confirm-password"
                type="password"
                placeholder="Confirm Password"
              />
            </div>
          )}
        </div>
        <p className="text-center py-[16px]">
          {!isLogin ? "Already have an account? " : "Go back to "}
          <strong
            className="text-blue-600 cursor-pointer hover:text-blue-500"
            onClick={() => setIsLogin((prevState) => !prevState)}
          >
            {!isLogin ? "Login" : "SignUp"}
          </strong>
        </p>
        <Button title={!isLogin ? "SignUp" : "Login"} type="submit" variant='outline' className="w-full"/>
      </form>
      <p className="font-light text-center text-gray-600 text-sm">
        By signing up, you agree to accept our terms and conditions.
      </p>
    </div>
  );
};

export default AuthForm;
