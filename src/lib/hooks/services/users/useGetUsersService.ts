import { GetUserInfoResponse } from "@/controllers/users/getUserInfo";
import { getUsers } from "@/controllers/users/getUsers";
import { QK_GET_USERS } from "@/lib/constants/query-constants";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { toast } from "sonner";

export const useGetUsersService = () => {
  const query = useQuery({
    queryKey: [QK_GET_USERS],
    queryFn: getUsers,
  });

  useEffect(() => {
    if (query.isError) {
      toast.error(query.error.message);
    }
  }, [query.isError, query.error]);

  return {
    data: query.data as unknown as GetUserInfoResponse[],
    isLoading: query.isPending,
    refetch: query.refetch,
  };
};