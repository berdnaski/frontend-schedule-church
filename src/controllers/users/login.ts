import { api } from "@/api/axios";
import { z } from "zod";

export type LoginRequest = {
  email: string;
  password: string;
};

const loginResponseSchema = z.object({
  token: z.string(),
});

export type LoginResponse = z.infer<typeof loginResponseSchema>;

export const login = async (data: LoginRequest): Promise<LoginResponse> => {
  const url = "/login";
  const response = await api.post(url, data);
  return loginResponseSchema.parse(response.data);
};
