import { api } from "@/api/axios";
import { z } from "zod";

const getUserInfoSchema = z.object({
  id: z.string(),
  name: z.string(),
  email: z.string(),
  role: z.string(),
  createdAt: z.string(),
  updatedAt: z.string(),
  departments: z.array(z.string()),
});

export type GetUserInfoResponse = z.infer<typeof getUserInfoSchema>;

export const getUserInfo = async (): Promise<GetUserInfoResponse> => {
  const url = "/user";
  const response = await api.get(url);
  return getUserInfoSchema.parse(response.data["user"]);
};