import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { updateLeaderRequest, UpdateLeaderRequestDTO } from "@/controllers/leader/update-leader-request";
import { QK_GET_LEADER_REQUESTS } from "@/lib/constants/query-constants";

interface UpdateLeaderRequestError {
  message: string;
}

export const useUpdateLeaderRequest = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: UpdateLeaderRequestDTO) => updateLeaderRequest(data),
    onSuccess: () => {
      toast.success("Solicitação de liderança atualizada com sucesso!");
      queryClient.invalidateQueries({
        queryKey: [QK_GET_LEADER_REQUESTS]
      });
    },
    onError: (error: UpdateLeaderRequestError) => {
      toast.error("Erro ao atualizar solicitação de liderança.");
      console.error("Erro ao atualizar solicitação de liderança:", error.message);
    },
  });
};
