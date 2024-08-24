import { api } from "@/api/axios";
import { z } from "zod";

// Define o esquema de validação para atualizar uma solicitação de liderança
const updateLeaderRequestSchema = z.object({
  id: z.string().uuid(),
  isAccepted: z.union([z.boolean(), z.string()]).transform((val) => {
    if (typeof val === "boolean") return val;
    return val.toUpperCase() === "ACCEPTED";
  }),
  roles: z.array(z.string()).optional(), 
});

export type UpdateLeaderRequestDTO = z.infer<typeof updateLeaderRequestSchema>;

export const updateLeaderRequest = async (data: UpdateLeaderRequestDTO): Promise<void> => {
  const { id, isAccepted, roles } = updateLeaderRequestSchema.parse(data);

  const url = `/leader-requests/${id}/${isAccepted ? "ACCEPTED" : "REJECTED"}`;
  
  const payload = {
    roles: roles || [],
  };

  await api.put(url, payload);
};
