// types.ts
import { z } from 'zod';
import { ObjectId } from 'mongodb';
import { User } from 'next-auth';

export const ExtendedUserSchema = z.object({
  id: z.string(),
  name: z.string().nullable(),
  email: z.string().email().nullable(),
  image: z.string().nullable(),
  // Custom fields
  firstName: z.string().min(1).optional(),
  lastName: z.string().min(1).optional(),
  phoneNumber: z.string().optional(),
  company: z.string().optional(),
  title: z.string().optional(),
  about: z.string().optional(),
  socialMediaProfiles: z.array(z.object({
    platform: z.string(),
    url: z.string().url()
  })).optional(),
  nfcCards: z.array(z.string()).optional(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional()
});

export type ExtendedUser = z.infer<typeof ExtendedUserSchema> & User;

export const NFCCardSchema = z.object({
  _id: z.instanceof(ObjectId).optional(),
  userId: z.string(),
  cardIdentifier: z.string(),
  isActive: z.boolean(),
  customizations: z.object({
    theme: z.string().optional(),
    layout: z.string().optional()
  }).optional(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional()
});

export type NFCCard = z.infer<typeof NFCCardSchema>;