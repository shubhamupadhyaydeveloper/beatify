import { z } from "zod";

export const SignUpTypes = z.object({
    username : z.string().regex(/^[a-zA-Z]+$/, {message : "Username must contain only alphabetic character"}).min(2,'atleast 2 digit is required'),
    email : z.string().email("please enter vaild email"),
    password : z.string().min(4,{message : "atleast 4 digit is required"})
})

export const VerificationTypes = z.object({
    code : z.string().max(6,"code must be 6 digits").min(6,"code must be 6 digits")
})