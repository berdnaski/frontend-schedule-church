// src/context/AuthContext.tsx
import { createContext, useContext, ReactNode } from 'react';
import { registerUser } from '../services/authService';
import { AuthContextType } from '@/@types/auth';

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
    children: ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
  const register = async (name: string, email: string, password: string) => {
    try {
      await registerUser(name, email, password);
      console.log('User registered successfully!');
    } catch {
      console.error('Failed to register user');
    }
  };

  return (
    <AuthContext.Provider value={{ register }}>
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
