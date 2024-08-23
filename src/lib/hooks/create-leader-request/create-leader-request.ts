import { useMutation } from "@tanstack/react-query";
import {
  createLeaderRequest,
  CreateLeaderRequestDTO,
} from "@/controllers/leader/create-leader-request";
import { LeaderRequestResponse } from "@/@types/auth";

export const useCreateLeaderRequest = () => {
  const createLeaderRequestMutation = useMutation({
    mutationFn: createLeaderRequest,
    onError: (error) => {
      console.error("Erro ao criar solicitação de liderança:", error);
    },
    onSuccess: async (data: LeaderRequestResponse) => {
      console.log("Solicitação de liderança criada com sucesso:", data);
    },
  });

  const execute = async (data: CreateLeaderRequestDTO) => {
    await createLeaderRequestMutation.mutateAsync(data);
  };

  return {
    execute,
    isLoading: createLeaderRequestMutation.isPending,
    isError: createLeaderRequestMutation.isError,
    isSuccess: createLeaderRequestMutation.isSuccess,
    error: createLeaderRequestMutation.error,
  };
};
