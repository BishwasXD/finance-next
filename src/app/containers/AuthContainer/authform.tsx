"use client";
import React from "react";
import Button from "@/app/components/Button/button";
import Input from "@/app/components/Input/input";
import { LinkedinIcon } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { passwordSchema, emailSchema } from "@/app/schema/authFormSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";
import { toast } from "react-toastify";
import axios from "axios";
import { signUpUrl, loginUrl } from "@/app/requests/authFormRequests";

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

    if (confirmPassword !== password) {
      toast.error("password didnot matched");
      return;
    }
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
      console.log("response from a server", res.data);
    } catch (error) {
      console.log("got error", error);
    }
  };

  //TODO: implement O-auth show error when schema not matched.
  return (
    <div className="flex flex-col gap-[20px] bg-white px-[30px] py-[40px] mt-[20px] mr-[20px] rounded-lg shadow-md float-end">
      <div className="flex flex-col text-center gap-[14px]">
        <p className="font-bold ">Welcome to Track My Finance</p>
        <p className="text-sm text-gray-600">
          Easily manage and visualize your daily expenses and incomes with
          intuitive graphs and charts.
        </p>
      </div>
      <div className="flex gap-4 items-center justify-center">
        <Button
          text="Sign Up with Facebook"
          icon={<LinkedinIcon className="text-blue-600" />}
        />
        <Button
          text="Sign Up with Google"
          icon={<LinkedinIcon className="text-blue-600" />}
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
        <Button text={!isLogin ? "SignUp" : "Login"} type="submit" />
      </form>
      <p className="font-light text-center text-gray-600 text-sm">
        By signing up, you agree to accept our terms and conditions.
      </p>
    </div>
  );
};

export default AuthForm;
