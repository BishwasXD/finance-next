import axios from "axios";
import { NextAuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { backendRequests } from "@/request";

export const options: NextAuthOptions = {
    providers: [
   
       Credentials({
        name: "Credentials",
        credentials: {
          email: {
            label: "email:",
            type: "email",
            placeholder: "example@gmail.com",
          },
          password: {
            label: "Password:",
            type: "password",
            placeholder: "xxxxxxxx",
          },
        },
        async authorize(credentials) {
          const { email, password } = credentials || {};
          try {
            const res = await axios.post(backendRequests.loginUrl, { email:email, password:password });
            const token   = res.data.token.access;
            const user = await axios.post(backendRequests.verifyTokenUrl, { token:token });
            if (user.data) {
              return user.data;
            }
          } catch (error: any) {
            console.log(error?.response?.data?.message);
            const errorMessage = error?.response?.data ? error?.response?.data?.message : "Invalid Credentials";
            throw new Error(errorMessage);
          }
        },
      }),
    ]
}