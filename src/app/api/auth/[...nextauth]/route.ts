
import NextAuth from 'next-auth';
import { NextAuthOptions } from 'next-auth';

import GoogleProvider from 'next-auth/providers/google';

export const authOptions: NextAuthOptions = {
   session:{
    strategy:'jwt'
   },
   providers:[
    GoogleProvider({
        clientId: process.env.GOOGLE_ID as string,
        clientSecret: process.env.GOOGLE_SECRET as string

    })
   ],  
   callbacks: {
    async redirect({ url, baseUrl }) {
      console.log("Redirect URL:", url);
      console.log("Base URL:", baseUrl);
      const redirectUrl = url.startsWith(baseUrl) ? url : baseUrl;
      console.log("Redirecting to:", redirectUrl);
      return redirectUrl;
    },
  },
  debug: true,

  
}

const handler = NextAuth(authOptions)
export {handler as GET, handler as POST}