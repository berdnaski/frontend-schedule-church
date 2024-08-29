import { useQuery } from "@tanstack/react-query";
import { getUserDepartment } from "@/controllers/departments/get-user-department";
import { QK_GET_USER_DEPARTMENT } from "@/lib/constants/query-constants";

export const useGetUserDepartment = (userId: string) => {
  const query = useQuery({
    queryKey: [QK_GET_USER_DEPARTMENT, userId], 
    queryFn: () => getUserDepartment(userId),
    enabled: !!userId,
  });

  return {
    data: query.data, 
    isLoading: query.isLoading,
    isError: query.isError, 
    error: query.error, 
  };
};
