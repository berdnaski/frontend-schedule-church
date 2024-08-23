import { useQuery } from "@tanstack/react-query";
import { QK_GET_LEADER_REQUESTS } from "@/lib/constants/query-constants";
import {
  LeaderRequest,
  listLeaderRequests,
} from "@/controllers/leader/list-leader-request";
import { useEffect } from "react";
import { toast } from "sonner";

export const useLeaderRequests = () => {
  const query = useQuery({
    queryKey: [QK_GET_LEADER_REQUESTS],
    queryFn: listLeaderRequests,
  });

  useEffect(() => {
    if (query.isError) {
      toast.error(query.error.message);
    }
  }, [query.isError, query.error]);

  return {
    data: query.data as unknown as LeaderRequest[],
    isLoading: query.isLoading,
    error: query.error,
  };
};
