import { z } from 'zod';

export const login = z.object({
  body: z.object({
    identifier: z.string({
      required_error: 'Email, Username or Phone Number is required'
    }),
    password: z
      .string({ required_error: 'Password is required' })
      .min(6, 'Password must contain atleast 6 characters'),
    fcmToken: z.string().optional().nullable()
  })
});

export const register = z.object({
  name: z
    .string({ required_error: 'Name is required' })
    .max(30, 'Name must not be greater than 30 characters'),
  username: z
    .string({ required_error: 'Name is required' })
    .max(30, 'Name must not be greater than 30 characters'),
  avatar: z.string().optional().nullable(),
  birthday: z.string({ required_error: 'Birthday is required' }),
  email: z
    .string({ required_error: 'Email is required' })
    .email('Not a valid email'),
  password: z
    .string({ required_error: 'Password is required' })
    .min(6, 'Password must contain atleast 6 characters'),
  confirmationCode: z.string({
    required_error: 'Confirmation Code is required'
  }),
  fcmToken: z.string().optional().nullable()
});

export const verifyValidUsername = z.object({
  body: z.object({
    username: z.string({ required_error: 'Username is required' })
  })
});

export const sendConfirmationCode = z.object({
  body: z.object({
    email: z
      .string({ required_error: 'Email is required' })
      .email('Not a valid email')
  })
});

export const verifyConfirmationCode = z.object({
  body: z.object({
    email: z
      .string({ required_error: 'Email is required' })
      .email('Not a valid email'),
    code: z.string({ required_error: 'Code is required' })
  })
});

export const updateDetails = z.object({
  body: z.object({
    name: z
      .string({ required_error: 'Name is required' })
      .max(30, 'Name must not be greater than 30 characters'),
    email: z
      .string({ required_error: 'Email is required' })
      .email('Not a valid email'),
    phone: z.string({ required_error: 'Phone is required' })
  })
});

export const updatePassword = z.object({
  body: z.object({
    currentPassword: z
      .string({ required_error: 'Password is required' })
      .min(6, 'Password must contain atleast 6 characters'),
    newPassword: z
      .string({ required_error: 'Confirm Password is required' })
      .min(6, 'Password must contain atleast 6 characters')
  })
});

export const forgotPassword = z.object({
  body: z.object({
    email: z
      .string({ required_error: 'Email is required' })
      .email('Not a valid email')
  })
});

export const verifyForgotPasswordCode = z.object({
  body: z.object({
    email: z
      .string({ required_error: 'Email is required' })
      .email('Not a valid email'),
    code: z.string({ required_error: 'Code is required' })
  })
});

export const resetPassword = z.object({
  body: z.object({
    code: z.string({ required_error: 'Code is required' }),
    password: z
      .string({ required_error: 'Password is required' })
      .min(6, 'Password must contain atleast 6 characters')
  })
});
