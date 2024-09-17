
import { signIn } from "next-auth/react";
import toast from "react-hot-toast";

export async function handleLogin(
  email: string,
  password: string,
  redirectUrl: string,
  router: any
) {
  const login = await signIn("credentials", {
    email,
    password,
    callbackUrl: redirectUrl,
    redirect:false
  });
  console.log("LOGIN", login);
  if (!login?.ok) {
    console.log("ERROR:", login?.error);
    toast.error(login?.error || "Something went wrong");
  } else if (login.ok) {
    router.push(redirectUrl ? redirectUrl : "");
  }
}

export default handleLogin;
