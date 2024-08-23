import { useQuery } from "@tanstack/react-query";
import { fetchLeaderRequests } from '@/api/leader-request';
import { LeaderRequest } from "@/@types/auth";

export const useLeaderRequests = () => {
  const query = useQuery<LeaderRequest[], Error>({
    queryKey: ['leaderRequests'],
    queryFn: fetchLeaderRequests,
  });

  return {
    data: query.data,
    isLoading: query.isLoading,
    isError: query.isError,
    isSuccess: query.isSuccess,
    error: query.error,
  };
};
