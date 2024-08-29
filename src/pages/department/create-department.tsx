import { useLoginService } from "@/lib/hooks/services/users/useLoginService";
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Container } from '@/components/container/container';
import { useCreateDepartments } from '@/lib/hooks/services/departments/create-departments-request';
import { useGetUserDepartment } from '@/lib/hooks/services/departments/use-get-user-department';
import { FaSpinner } from "react-icons/fa";

export function CreateDepartmentForm() {
  const { getInfoToken } = useLoginService();
  const user = getInfoToken();
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const { execute, isLoading, isError, isSuccess, error } = useCreateDepartments();
  const userId = user?.id; // Assumindo que `user` tem a propriedade `id`
  const { data: department, isLoading: isFetchingDepartment } = useGetUserDepartment(userId || '');

  // Exemplo de como definir o role; ajuste conforme necessário
  const userRole = 'LEADER'; // Ou 'ADMIN' dependendo da lógica do frontend

  useEffect(() => {
    if (department) {
      // Se o usuário já tem um departamento, impede a criação de um novo
      setName('');
      setDescription('');
      alert("Você já possui um departamento associado a você.");
    }
  }, [department]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!userId) {
      alert("User ID não está disponível.");
      return;
    }

    if (department) {
      // Se o usuário já tem um departamento, não permite criar um novo
      alert("Você já possui um departamento associado a você.");
      return;
    }

    try {
      await execute({ name, description, userId, role: userRole });
      setName('');
      setDescription('');
    } catch (err) {
      console.error("Failed to create department:", err);
    }
  };

  return (
    <Container>
      <div className="bg-[#121212] text-white flex-col lg:flex-row">
        <main className="flex-1 p-6 lg:p-8 ml-0 lg:pl-6 overflow-y-auto">
          <h1 className="text-2xl flex items-center w-ful justify-center font-bold mb-4 text-zinc-200 antialiased">Criar Departamento</h1>
          {isFetchingDepartment ? (
            <div className="flex justify-center items-center h-full">
              <FaSpinner className="h-6 w-6 text-blue-600 animate-spin" />
            </div>
          ) : (
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className='flex flex-col gap-2'>
                <label htmlFor="name" className="block text-sm font-medium text-zinc-200">
                  Nome
                </label>
                <Input
                  id="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className='border border-gray-700'
                  placeholder="Digite o nome do departamento"
                  required
                />
              </div>
              <div className='flex flex-col gap-2'>
                <label htmlFor="description" className="block text-sm font-medium text-zinc-200">
                  Descrição
                </label>
                <Input
                  id="description"
                  type="text"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className='border border-gray-700'
                  placeholder="Digite uma descrição"
                  required
                />
              </div>

              <Button 
                type="submit" 
                className="w-full bg-blue-300 text-zinc-900 font-semibold hover:bg-blue-400"
                disabled={isLoading || !!department} 
              >
                {isLoading ? 'Criando...' : 'Criar Departamento'}
              </Button>
              {isError && <p className="text-red-500 mt-2">Erro: {error?.message}</p>}
              {isSuccess && <p className="text-green-500 mt-2">Departamento criado com sucesso!</p>}
            </form>
          )}
        </main>
      </div>
    </Container>
  );
}
