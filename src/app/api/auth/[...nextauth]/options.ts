import axios from "axios";
import { NextAuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { backendRequests } from "@/request";


export const options: NextAuthOptions = {
  providers: [
    Credentials({
      name: "Credentials",

      //this is required if we wish to generate form with cred provider, since we already have a form this can be left empty.
      credentials: {
        // email: {
        //   label: "email:",
        //   type: "email",
        //   placeholder: "example@gmail.com",
        // },
        // password: {
        //   label: "Password:",
        //   type: "password",
        //   placeholder: "xxxxxxxx",
        // },
      },
      async authorize(credentials) {
        const { email, password } = credentials as {email:string, password:string} || {};
        try {
          const res = await axios.post(backendRequests.loginUrl, {
            email: email,
            password: password,
          });
          const token = res.data.data.access;

          //verifies token to check its expiry, whether tampered or not, once verified returns user information
          const user = await axios.post(backendRequests.verifyTokenUrl, {
            token: token,
          });
          if (user.data) {
            return user.data; //stored in cookie
          }
        } catch (error: any) {
          console.log(error?.response?.data?.message);
          const errorMessage = error?.response?.data
            ? error?.response?.data?.message
            : "Invalid Credentials";
          throw new Error(errorMessage);
        }
      },
    }),
  ],
  // callbacks: {
  //   async jwt({ token, user }) {
  //     if (user) {
  //       token.user = user;
  //     }
  //     return token;
  //   },

  //   async session({ session, token }) {
  //     session.user = token as any;
  //     return session;
  //   },
  // },
};
