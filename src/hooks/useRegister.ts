// src/hooks/useRegister.ts
import { useState } from 'react';
import { registerUser } from '@/services/authService';
import { RegisterUser } from '@/@types/auth';

export function useRegister() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const register = async (userData: RegisterUser) => {
    setIsLoading(true);
    setError(null);
    try {
      await registerUser(userData);
      alert('Cadastro realizado com sucesso!');
    } catch {
      setError('Ocorreu um erro ao realizar o cadastro.');
    } finally {
      setIsLoading(false);
    }
  };

  return {
    register,
    isLoading,
    error,
  };
}
