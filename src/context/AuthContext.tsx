// src/context/AuthContext.tsx
import { createContext, useContext, ReactNode, useState, useEffect } from 'react';
import { fetchUser, registerUser, loginUser } from '../services/authService'; 
import { AuthContextType, LoginUser, RegisterUser, UserProps } from '@/@types/auth';

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<UserProps | null>(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      fetchUser(token)
        .then(user => {
          setUser(user);
        })
        .catch((error) => {
          console.error('Failed to fetch user:', error);
          setUser(null);
        });
    }
  }, []);

  const register = async (userData: RegisterUser) => {
    try {
      await registerUser(userData);
    } catch (error) {
      console.error('Registration failed:', error);
      throw error;
    }
  };

  const login = async (userData: LoginUser) => {
    try {
      const token = await loginUser(userData);
      const fetchedUser = await fetchUser(token);
      setUser(fetchedUser);
    } catch (error) {
      console.error('Login failed:', error);
      throw error;
    }
  };

  const isAdmin = () => {
    return user?.role === 'ADMIN'; // Substitua 'ADMIN' pelo valor correspondente no seu enum
  };

  return (
    <AuthContext.Provider value={{ user, setUser, login, register, isAdmin }}>
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
