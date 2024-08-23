import { api } from "@/api/axios";
import { z } from "zod";

const leaderRequestSchema = z.object({
  id: z.string().uuid(),
  name: z.string(),
  status: z.enum(["PENDING", "APPROVED", "REJECTED"]),
});

export type LeaderRequest = z.infer<typeof leaderRequestSchema>;

export const listLeaderRequests = async (): Promise<LeaderRequest[]> => {
  const url = "/leader-requests";
  const response = await api.get(url);
  return leaderRequestSchema.array().parse(response.data["leaderRequests"]);
};
