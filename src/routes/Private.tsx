// src/routes/Private.tsx
import { ReactNode } from 'react';
// import { Navigate } from 'react-router-dom';

interface PrivateProps {
  children: ReactNode;
  role?: string;
}

export function Private({ children, role }: PrivateProps) {
  // const { user, isAdmin } = useAuth();

  // if (!user) {
  //   return <Navigate to="/login" />;
  // }

  // if (role === 'ADMIN' && !isAdmin()) {
  //   return <Navigate to="/login" />;
  // }

  return <>{children}</>;
}
