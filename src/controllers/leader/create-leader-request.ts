import { z } from "zod";
import { api } from "@/api/axios";

const createLeaderRequestSchema = z.object({
    userId: z.string().uuid(),
    status: z.literal("PENDING"),
});

export type CreateLeaderRequestDTO = z.infer<typeof createLeaderRequestSchema>;

export const createLeaderRequest = async (data: CreateLeaderRequestDTO) => {
    try {
        createLeaderRequestSchema.parse(data);

        const url = "/leader-requests";
        const response = await api.post(url, data);
        return response.data;
    } catch (error) {
        console.error("Failed to create leader request:", error);
        throw error;
    }
};
