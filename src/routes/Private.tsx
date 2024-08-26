import { AuthComponent } from '@/components/ui/auth-component';
import { ReactNode } from 'react';

type PrivateProps = {
  children: ReactNode;
  role?: string;
};

export function Private({ children, role }: PrivateProps) {
  return (
    <AuthComponent role={role} redirect="/login">
      {children}
    </AuthComponent>
  );
}
