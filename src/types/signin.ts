import {z} from 'zod';

export const SignInTypes = z.object({
  email: z.string().email('please enter vaild email'),
  password: z.string().min(6, {message: 'atleast 6 digit is required'}),
});

export const ResetPasswordTypes = z
  .object({
    password: z
      .string()
      .min(6, 'Password must be at least 6 characters long')
      .regex(/[A-Za-z]/, 'Password must include letters')
      .regex(/[@$!%*?&#]/, 'Password must include at least one special symbol'),

    confirmPassword: z
      .string()
      .min(6, 'Confirm Password must be at least 6 characters long')
      .regex(/[A-Za-z]/, 'Confirm Password must include letters')
      .regex(
        /[@$!%*?&#]/,
        'Confirm Password must include at least one special symbol',
      ),
  })
  .refine(data => data.password === data.confirmPassword, {
    message: 'Please ensure both fields contain the same password',
    path : ["Confirm"]
  });

export const ForgetPasswordTypes = z.object({
   forgetemail : z.string().email()
})

export type loginApiType = {
  accessToken: string;
  refreshToken: string;
  userId: string;
};

export type refreshApiType = {
  refreshToken: string;
  accessToken: string;
  message: string
};