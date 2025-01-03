"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";
import axios from "axios";
import { useRouter } from "next/navigation";
import { backendRequests } from "@/request";
import { FcGoogle } from "react-icons/fc";
import handleLogin from "@/services/LogInService";
const passwordSchema = z
  .string()
  .min(8, { message: "Password should be at least 8 characters" });

const loginSchema = z.object({
  email: z
    .string()
    .min(1, { message: "Email is required" })
    .email({ message: "Must be a valid email" }),
  password: passwordSchema,
});

const signUpSchema = loginSchema
  .extend({
    confirm_password: passwordSchema,
  })
  .refine((data) => data.password === data.confirm_password, {
    message: "Passwords don't match",
    path: ["confirm_password"],
  });

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState<boolean>(true);

  const formSchema = isLogin ? loginSchema : signUpSchema;
  const defaultFormValues = {
    email: "",
    password: "",
    ...(isLogin ? {} : { confirm_password: "" }),
  };

  type IformType = z.infer<typeof formSchema>;
  const form = useForm<IformType>({
    defaultValues: defaultFormValues,
    resolver: zodResolver(formSchema),
  });
  const {
    formState: { errors },
  } = form;

  const router = useRouter();

  const onSubmit = async (data: IformType) => {
    const { email, password } = data;
    if (isLogin) {
      handleLogin(email, password, "/home", router);
    } else {
      try {
        const res = await axios.post(backendRequests.signUpUrl, data);
        handleLogin(email, password, "/home", router);
      } catch (error:any) {
        console.log("ERROR", error.response.data.message);
        toast.error(error.response.data.message)

      }
    }
  };

  return (
    <div className="flex flex-col gap-5  bg-white w-[500px] py-20 dark:bg-dark_mode dark:border border-black px-4 dark:border-0">
      <Toaster />
      <div className="flex flex-col text-center gap-4">
        <p className="font-bold">Welcome to Track My Finance</p>
        <p className="text-sm text-gray-600 dark:text-white">
          Easily manage and visualize your daily expenses and incomes with
          intuitive graphs and charts.
        </p>
      </div>

      <Button
        title="Login with google"
        variant="outline"
        icon={<FcGoogle size={24} />}
        className="gap-2"
      />

      <div className="flex items-center justify-center">
        <hr className="border-t border-gray-300 w-full" />
        <span className="px-1 text-gray-600 text-sm dark:text-white">OR</span>
        <hr className="border-t border-gray-300 w-full" />
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
              placeholder="example@gmail.com"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors?.email?.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="password" className="text-sm">
              Password
            </label>
            <Input
              {...form.register("password")}
              id="password"
              type="password"
              placeholder="xxxxxxxxxx"
            />
            {errors.password && (
              <p className="text-red-500 text-sm">
                {errors?.password?.message}
              </p>
            )}
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
                placeholder="xxxxxxxxxx"
              />
              {/* {errors.confirm_password && (
                <p className="text-red-500 text-sm">
                  {errors?.confirm_password?.message}
                </p>
              )} */}
            </div>
          )}
        </div>

        <Button
          title={!isLogin ? "SignUp" : "Login"}
          type="submit"
          variant="outline"
          className="w-full mt-10 bg-blue-600 hover:bg-blue-500 text-white dark:bg-gray-500 dark:hover:bg-gray-600"
        />
        <p className="text-center py-[16px]">
          {!isLogin ? "Already have an account? " : "Go back to "}
          <strong
            className="text-blue-500 cursor-pointer hover:text-blue-600"
            onClick={() => setIsLogin((prevState) => !prevState)}
          >
            {!isLogin ? "Login" : "SignUp"}
          </strong>
        </p>
      </form>
      <p className="font-light text-center text-gray-600 text-sm dark:text-white">
        By signing up, you agree to accept our terms and conditions.
      </p>
    </div>
  );
};

export default AuthForm;
