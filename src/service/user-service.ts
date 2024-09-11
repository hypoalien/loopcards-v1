// userService.ts
import { Collection } from 'mongodb';
import { ExtendedUser, ExtendedUserSchema } from '@/types/global-types';

export class UserService {
  private users: Collection<ExtendedUser>;

  constructor(usersCollection: Collection<ExtendedUser>) {
    this.users = usersCollection;
  }

  async createUser(userData: Omit<ExtendedUser, 'id' | 'createdAt' | 'updatedAt'>): Promise<ExtendedUser> {
    const validatedData = ExtendedUserSchema.parse({
      ...userData,
      createdAt: new Date(),
      updatedAt: new Date()
    });
    const result = await this.users.insertOne(validatedData);
    return { ...validatedData, id: result.insertedId.toString() };
  }

  async getUserById(id: string): Promise<ExtendedUser | null> {
    const user = await this.users.findOne({ id });
    return user ? ExtendedUserSchema.parse(user) : null;
  }

//   async updateUser(id: string, userData: Partial<ExtendedUser>): Promise<ExtendedUser | null> {
//     const validatedData = ExtendedUserSchema.partial().parse(userData);
//     const result = await this.users.findOneAndUpdate(
//       { id },
//       { $set: { ...validatedData, updatedAt: new Date() } },
//       { returnDocument: 'after' }
//     );
//     return result?.value ? ExtendedUserSchema.parse(result.value) : null;
//   }

  async deleteUser(id: string): Promise<boolean> {
    const result = await this.users.deleteOne({ id });
    return result.deletedCount === 1;
  }
}