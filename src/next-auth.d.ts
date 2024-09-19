import "next-auth";

//d.ts file is only for type declaration we cannot write functions here

//since next auth doesnot have token param in its session type, we are extending it, so using user.token will no longer results an error.
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