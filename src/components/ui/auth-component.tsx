import { useLoginService } from "@/lib/hooks/services/users/useLoginService";
import { Navigate } from 'react-router-dom';

type AuthComponentProps = {
  role?: string;
  redirect?: string;
  children: React.ReactNode;
};

export const AuthComponent = ({
  children,
  redirect = "/login",
  role,
}: AuthComponentProps) => {
  const { getInfoToken } = useLoginService();
  const user = getInfoToken();

  if (!user) {
    return <Navigate to={redirect} replace />;
  }

  if (role && user.role !== role) {
    const redirectPath = role === 'ADMIN' ? '/dashboard' : redirect;
    return <Navigate to={redirectPath} replace />;
  }

  return <>{children}</>;
};
