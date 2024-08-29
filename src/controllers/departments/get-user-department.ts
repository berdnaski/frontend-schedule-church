import { api } from "@/api/axios";
import { z } from "zod";

const userDepartmentSchema = z.object({
  id: z.string().uuid(),
  name: z.string(),
  description: z.string().optional(),
});

export type UserDepartment = z.infer<typeof userDepartmentSchema>;

export const getUserDepartment = async (userId: string): Promise<UserDepartment | null> => {
  const url = `/departments/user/${userId}`;
  try {
    const response = await api.get(url);
    return userDepartmentSchema.parse(response.data);
  } catch (error) {
    console.error("Failed to fetch user department:", error);
    throw error;
  }
};
