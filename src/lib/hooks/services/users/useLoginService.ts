import {
  getUserInfo,
  GetUserInfoResponse,
} from "@/controllers/users/getUserInfo";
import { login, LoginResponse } from "@/controllers/users/login";
import { AUTH_TOKEN, QK_USER } from "@/lib/constants/query-constants";
import { useStorage } from "@/lib/hooks/useStorage";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

export const useLoginService = () => {
  const { getStorageItem, setStorageItem, removeStorageItem } = useStorage();
  const navigate = useNavigate();

  const loginMutation = useMutation({
    mutationFn: login,
    onError: (error) => {
      toast.error(error.message);
    },
    onSuccess: async (data: LoginResponse) => {
      setStorageItem(AUTH_TOKEN, data.token);
      const user = await getUserInfo();
      console.log("User", user);
      setStorageItem(QK_USER, user);
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
  };

  const logout = () => {
    removeStorageItem(AUTH_TOKEN);
    removeStorageItem(QK_USER);
    navigate("/login");
  };

  const getInfoToken = (): GetUserInfoResponse | null => {
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
