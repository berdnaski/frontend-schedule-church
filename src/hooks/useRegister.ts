// src/hooks/useRegister.ts
import { useState } from 'react';
import { RegisterUser } from '@/@types/auth';
import api from '@/api/axios';

export function useRegister() {
  const [error, setError] = useState<string | null>(null);

  const register = async (userData: RegisterUser) => {
    setError(null);

    const token_exists = localStorage.getItem('token');
    if(token_exists) {
      throw new Error('Token já existente');
      return;
    }
    
    try {
      const res = await api.post('/register', userData);

      if (res.data && res.data.token) {
        localStorage.setItem('token', res.data.token);
      } else {
        throw new Error('Token não retornado');
      }

      return res.data;
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      }
      throw new Error('Ocorreu um erro ao realizar o cadastro.');
    }
  };

  return {
    register,
    error,
  };
}
