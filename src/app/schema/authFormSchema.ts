import { z } from "zod";

export const passwordSchema = z
  .string()
  .min(8, { message: "must be atleast 8 letter" })
  .regex(/[a-z]/, { message: "should contain atleast one lowercae letter" })
  .regex(/[A-Z]/, { message: "should contain atleast one uppercase letter" })
  .regex(/[!@#$%&*]/, { message: "should contain atleast one special character" });


export const emailSchema = z.string().email({message:'must be valid email'})