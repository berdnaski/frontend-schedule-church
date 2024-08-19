// src/hooks/useLogin.ts
import api from '@/api/axios';
import { fetchUser } from '@/services/authService';
import { useAuth } from '@/context/AuthContext';

export function useLogin() {
  const { setUser } = useAuth();

  async function login({ email, password }: { email: string, password: string }) {
    try {
      const response = await api.post('/login', { email, password });
      const { token } = response.data; // Deve ser um string
      console.log('Login response:', response.data); // Adicione um console.log aqui

      localStorage.setItem('token', token);

      const fetchedUser = await fetchUser(token); // `fetchUser` espera um token `string`
      console.log('Fetched user:', fetchedUser); // Adicione um console.log aqui
      setUser(fetchedUser);

      return fetchedUser;
    } catch (error) {
      console.error('Login failed:', error);
      throw error;
    }
  }

  return { login };
}
