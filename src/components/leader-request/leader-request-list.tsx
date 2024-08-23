// src/components/leader-request/LeaderRequestsList.tsx

import { LeaderRequest } from '@/controllers/leader/list-leader-request';
import { useLeaderRequests } from '@/lib/hooks/leader-request/use-leader-request';
import React from 'react';


export function LeaderRequestsList() {
  const { data: leaderRequests, isLoading, isError } = useLeaderRequests();

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error loading leader requests.</p>;

  // Verificar se leaderRequests está definido antes de mapear
  if (!leaderRequests || leaderRequests.length === 0) return <p>No leader requests found.</p>;

  return (
    <div id="manage-leader-requests" className="bg-[#161718] rounded-xl shadow-md mb-8 md:w-[75%] md:mx-auto">
      <div className="max-h-[60vh] overflow-x-auto rounded-xl scrollbar-hide">
        <table className="min-w-full divide-y divide-[#000000] bg-[#161718] border border-[#000000] rounded-xl">
          <thead className="bg-[#232324]">
            <tr>
              <th scope="col" className="p-4 text-left text-sm font-semibold text-gray-300 rounded-tl-xl">
                User ID
              </th>
              <th scope="col" className="p-4 text-left text-sm font-semibold text-gray-300">
                Status
              </th>
            </tr>
          </thead>
          <tbody className="bg-[#161718] divide-y divide-[#000000] rounded-xl">
            {leaderRequests.map((request: LeaderRequest) => (
              <tr key={request.id}>
                <td className="p-4 text-sm text-white">{request.userId}</td>
                <td className="p-4">{request.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
