"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { passwordSchema, emailSchema } from "../../schema/authFormSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";
import axios from "axios";
import { useRouter } from "next/navigation";
import { signUpUrl, loginUrl } from "../../requests/authFormRequests";

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  let formSchema = z.object({
    email: emailSchema,
    password: passwordSchema,
  });
  if (!isLogin) {
    formSchema = formSchema.extend({
      confirm_password: passwordSchema,
    });
  }
  const defaultFormValues = {
    email: "",
    password: "",
    confirm_password: "",
  };

  type IformType = z.infer<typeof formSchema>;
  const form = useForm<IformType>({
    defaultValues: defaultFormValues,
    resolver: zodResolver(formSchema),
  });
  const router = useRouter();

  const onSubmit = async (data: IformType) => {
    console.log(data);
    try {
      const res = await axios.post(isLogin ? loginUrl : signUpUrl, data);
      console.log(res.data.token.access);
      localStorage.setItem("accessToken", res.data.token.access);
      localStorage.setItem("refreshToken", res.data.token.refresh);
      localStorage.setItem("email", form.getValues("email"));
      router.push("/home");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col gap-[20px] bg-white px-[30px] py-[40px] mt-[20px] mr-[20px] rounded-lg shadow-md float-end w-[565px] dark:bg-dark_mode dark:border border-black">
      <div className="flex flex-col text-center gap-[14px]">
        <p className="font-bold">Welcome to Track My Finance</p>
        <p className="text-sm text-gray-600">
          Easily manage and visualize your daily expenses and incomes with
          intuitive graphs and charts.
        </p>
      </div>

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
              <label htmlFor="confirm_password" className="text-sm">
                Confirm Password
              </label>
              <Input
                {...form.register("confirm_password")} 
                id="confirm_password"
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
        <Button
          title={!isLogin ? "SignUp" : "Login"}
          type="submit"
          variant="outline"
          className="w-full"
        />
      </form>
      <p className="font-light text-center text-gray-600 text-sm">
        By signing up, you agree to accept our terms and conditions.
      </p>
    </div>
  );
};

export default AuthForm;
