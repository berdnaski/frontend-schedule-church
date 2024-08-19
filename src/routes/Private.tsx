// src/routes/Private.tsx
import { ReactNode } from 'react';
import { useAuth } from '@/context/AuthContext';
import { Navigate } from 'react-router-dom';

interface PrivateProps {
  children: ReactNode;
  role?: string; // Adicione a propriedade role
}

export function Private({ children, role }: PrivateProps) {
  const { user, isAdmin } = useAuth();

  if (!user) {
    // Se o usuário não estiver autenticado, redirecione para o login
    return <Navigate to="/login" />;
  }

  if (role === 'ADMIN' && !isAdmin()) {
    // Se o papel requerido é ADMIN e o usuário não é admin, redirecione para o login ou outra página
    return <Navigate to="/login" />;
  }

  return <>{children}</>;
}
