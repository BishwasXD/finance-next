import GoogleProvider from "next-auth/providers/google";
import { NextAuthOptions } from "next-auth";
import NextAuth from "next-auth/next";
import axios from "axios";

const authOption: NextAuthOptions = {
  debug: true,
  session: {
    strategy: "jwt",
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID as string,
      clientSecret: process.env.GOOGLE_SECRET as string,
    }),
  ],
  callbacks: {
    async signIn({ profile }) {
      try {

        const res = await axios.post('http://127.0.0.1:8000/accounts/google-login', {'email':profile?.email})
        console.log(res)
        sessionStorage.setItem('accessToken', res.data.token.access)
        localStorage.setItem('refereshToken', res.data.token.refersh)
        return true;
      } catch (error) {
        console.error('SignIn error:', error);
        return false;
      }
    },
  },
};

const handler = NextAuth(authOption);
export { handler as GET, handler as POST };
