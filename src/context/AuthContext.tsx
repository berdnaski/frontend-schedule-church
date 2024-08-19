// src/context/AuthContext.tsx
import { createContext, useContext, ReactNode } from 'react';
import { useRegister } from '../hooks/useRegister';
import { AuthContextType } from '@/@types/auth';

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
  const { register, error } = useRegister(); 

  return (
    <AuthContext.Provider value={{ register, error }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
