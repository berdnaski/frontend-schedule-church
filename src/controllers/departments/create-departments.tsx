import { api } from "@/api/axios";
import { z } from "zod";

const createDepartmentSchema = z.object({
  name: z.string().min(1),
  description: z.string().optional(),
  userId: z.string().uuid(),
  role: z.enum(['ADMIN', 'LEADER', 'MEMBER']),
});

export type CreateDepartmentDTO = z.infer<typeof createDepartmentSchema>;

export const createDepartment = async (data: CreateDepartmentDTO) => {
  try {
    createDepartmentSchema.parse(data);

    const url = "/departments"; 
    const response = await api.post(url, data);
    return response.data;
  } catch (error) {
    console.error("Failed to create department:", error);
    throw error;
  }
};
