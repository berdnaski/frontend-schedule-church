import { AuthComponent } from "@/components/ui/auth-component";
import { FaRegPenToSquare, FaRegRectangleXmark  } from "react-icons/fa6"
import { Link } from "react-router-dom";

// Exemplo de uma lista de usuários
const users = [
  { id: 1, name: "John Doe", role: "Admin" },
  { id: 2, name: "Jane Smith", role: "Leader" },
  { id: 3, name: "Alice Johnson", role: "Member" },
  { id: 1, name: "John Doe", role: "Admin" },
  { id: 2, name: "Jane Smith", role: "Leader" },
  { id: 3, name: "Alice Johnson", role: "Member" },
  { id: 1, name: "John Doe", role: "Admin" },
  { id: 2, name: "Jane Smith", role: "Leader" },
  { id: 3, name: "Alice Johnson", role: "Member" },
  { id: 1, name: "John Doe", role: "Admin" },
  { id: 2, name: "Jane Smith", role: "Leader" },
  { id: 3, name: "Alice Johnson", role: "Member" },
];

export function Admin() {
  return (
    <AuthComponent role="ADMIN" redirect="/dashboard">
      <div className=" bg-[#121212] text-white flex-col lg:flex-row">
        <main className="flex-1 p-6 lg:p-8 ml-0 lg:pl-6 overflow-y-auto">
          <div id="manage-users" className="bg-[#161718] rounded-xl shadow-md mb-8 md:w-[75%] md:mx-auto">
            <div className="max-h-[60vh] overflow-x-auto rounded-xl scrollbar-hide">
              <table className="min-w-full divide-y divide-[#000000] bg-[#161718] border border-[#000000] rounded-xl">
                <thead className="bg-[#232324]">
                  <tr>
                    <th scope="col" className="p-4 text-left text-sm font-semibold text-gray-300 rounded-tl-xl">Name</th>
                    <th scope="col" className="p-4 text-left text-sm font-semibold text-gray-300">Role</th>
                    <th scope="col" className="p-4 text-left text-sm font-semibold text-gray-300 rounded-tr-xl">Actions</th>
                  </tr>
                </thead>
                <tbody className="bg-[#161718] divide-y divide-[#000000] rounded-xl">
                  {users.map((user) => (
                    <tr key={user.id}>
                      <td className="p-4 text-sm text-white">
                        <div className="flex items-center">
                          <Link to={`/users/${user.id}`} className="text-gray-300 hover:text-gray-400">
                            {user.name}
                          </Link>
                        </div>
                      </td>
                      <td className="p-4">{user.role}</td>
                      <td className="p-4 flex space-x-2">
                        <Link
                          className="hover:text-gray-400"
                          to={`/users/edit/${user.id}`}
                        >
                          <FaRegPenToSquare size={20} />
                        </Link>
                        <button
                          className="hover:text-red-500"
                          onClick={() => alert(`Delete user with id: ${user.id}`)}
                        >
                          <FaRegRectangleXmark size={20} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>
    </AuthComponent>
  );
}
