// src/api/leader-request.ts

import { LeaderRequest } from "@/@types/auth";
import { api } from "@/api/axios";

export const fetchLeaderRequests = async (): Promise<LeaderRequest[]> => {
  try {
    const response = await api.get<{ leaderRequests: LeaderRequest[] }>("/leader-requests");
    return response.data.leaderRequests;
  } catch (error) {
    console.error("Failed to fetch leader requests:", error);
    throw new Error("Failed to fetch leader requests");
  }
};
