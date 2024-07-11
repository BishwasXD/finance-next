import GoogleProvider from "next-auth/providers/google";
import { NextAuthOptions } from "next-auth";
import NextAuth from "next-auth/next";

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
    signIn({ account, profile, email, credentials }) {
      try {
        const accessToken = account?.access_token;
        console.log('AccessToken:', accessToken);
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
