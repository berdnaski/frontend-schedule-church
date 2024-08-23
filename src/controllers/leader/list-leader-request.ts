// src/api/leader-request.ts

import { api } from "@/api/axios";
import { z } from "zod";

// Definindo o schema para uma solicitação de líder
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const leaderRequestSchema = z.object({
  id: z.string().uuid(),
  userId: z.string().uuid(),
  status: z.enum(["PENDING", "APPROVED", "REJECTED"]),
});

export type LeaderRequest = z.infer<typeof leaderRequestSchema>;

export const listLeaderRequests = async (): Promise<LeaderRequest[]> => {
  try {
    const url = "/leader-requests";
    const response = await api.get(url);
    return response.data;
  } catch (error) {
    console.error("Failed to fetch leader requests:", error);
    throw error;
  }
};
