// src/hooks/useRegister.ts
import { useState } from 'react';
import { registerUser } from '@/services/authService';
import { RegisterUser } from '@/@types/auth';

export function useRegister() {
  const [isLoading, setIsLoading] = useState(false);

  const register = async (userData: RegisterUser) => {
    setIsLoading(true);
    try {
      await registerUser(userData);
    } catch {
      throw new Error('Ocorreu um erro ao realizar o cadastro.'); 
    } finally {
      setIsLoading(false);
    }
  };

  return {
    register,
    isLoading,
  };
}
