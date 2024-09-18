import "next-auth";

declare module "next-auth" {
  interface Session {
    user?: {
        email: string;
        token_type: string;
        exp: number;   
        iat: number;   
        jti: string;   
        user_id: number;
        token: string; 
    };
  }
}