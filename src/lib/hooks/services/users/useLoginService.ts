import { getUserInfo, UserInfoResponse } from "@/controllers/users/getUserInfo";
import { login, LoginResponse } from "@/controllers/users/login";
import { AUTH_TOKEN, QK_USER } from "@/lib/constants/query-constants";
import { useStorage } from "@/lib/hooks/useStorage";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

export const useLoginService = () => {
  const { getStorageItem, setStorageItem, removeStorageItem } = useStorage();
  const navigate = useNavigate();

  const loginMutation = useMutation({
    mutationFn: login,
    onError: (error) => {
      // TODO: Se todos os erros da api tiverem a mesma estrutura, podemos tratar aqui
      console.error(error);
    },
    onSuccess: async (data: LoginResponse) => {
      setStorageItem(AUTH_TOKEN, data.token);
      navigate("/admin");
    },
  });

  const execute = async ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) => {
    await loginMutation.mutateAsync({ email, password });
    const user = await getUserInfo();
    setStorageItem(QK_USER, user);
  };

  const logout = () => {
    removeStorageItem(AUTH_TOKEN);
    navigate("/login");
  };

  const getInfoToken = (): UserInfoResponse | null => {
    const userStr = getStorageItem(QK_USER);

    if (!userStr) {
      return null;
    }

    return JSON.parse(userStr);
  };

  return {
    execute,
    logout,
    getInfoToken,
    isLoading: loginMutation.isPending,
    isFinished: loginMutation.isSuccess,
  };
};
