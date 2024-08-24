// src/components/leader-request/LeaderRequestsList.tsx

import { useLeaderRequests } from "@/lib/hooks/services/leader-request/use-leader-request";

export function LeaderRequestsList() {
  const { data: leaderRequests, isLoading } = useLeaderRequests();

  return (
    <div
      id="manage-leader-requests"
      className="bg-[#161718] rounded-xl shadow-md mb-8 md:w-[75%] md:mx-auto"
    >
      <div className="max-h-[60vh] overflow-x-auto rounded-xl scrollbar-hide">
        <table className="min-w-full divide-y divide-[#000000] bg-[#161718] border border-[#000000] rounded-xl">
          <thead className="bg-[#232324]">
            <tr>
              <th
                scope="col"
                className="p-4 text-left text-sm font-semibold text-gray-300 rounded-tl-xl"
              >
                Nome
              </th>
              <th
                scope="col"
                className="p-4 text-left text-sm font-semibold text-gray-300"
              >
                Status
              </th>
            </tr>
          </thead>
          <tbody className="bg-[#161718] divide-y divide-[#000000] rounded-xl">
            {isLoading && (
              <tr>
                <td colSpan={2} className="p-4 text-center text-sm text-white">
                  Carregando solicitações...
                </td>
              </tr>
            )}
            {leaderRequests?.length === 0 && !isLoading ? (
              <tr>
                <td colSpan={2} className="p-4 text-center text-sm text-white">
                  Nenhuma solicitação encontrada.
                </td>
              </tr>
            ) : (
              leaderRequests?.map((leader) => (
                <tr key={leader.id}>
                  <td className="p-4 text-sm text-white">{leader.name}</td>
                  <td className="p-4">{leader.status}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
