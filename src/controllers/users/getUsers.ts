import { api } from "@/api/axios";
import { z } from "zod";

const getUserSchema = z.object({
  id: z.string(),
  name: z.string(),
  email: z.string(),
  role: z.string(),
  createdAt: z.string(),
  updatedAt: z.string(),
  departments: z.array(z.string()),
});

const getUsersSchema = z.array(getUserSchema);

export type GetUserResponse = z.infer<typeof getUserSchema>;

export const getUsers = async (): Promise<GetUserResponse[]> => {
  const url = "/users";
  const response = await api.get(url);
  return getUsersSchema.parse(response.data["users"]);
};
