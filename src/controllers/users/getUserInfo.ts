import { api } from "@/api/axios";
import { z } from "zod";

const userInfoSchema = z.object({
  name: z.string(),
  email: z.string(),
  role: z.string(),
});

export type UserInfoResponse = z.infer<typeof userInfoSchema>;

export const getUserInfo = async (): Promise<UserInfoResponse> => {
  const url = "/user";
  const response = await api.get(url);
  return userInfoSchema.parse(response.data);
};
