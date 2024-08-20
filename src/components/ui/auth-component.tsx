import { useLoginService } from "@/lib/hooks/services/users/useLoginService";

type AuthComponentProps = {
  role?: string;
  redirect?: string;
  children: React.ReactNode;
};

export const AuthComponent = ({
  children,
  redirect,
  role,
}: AuthComponentProps) => {
  const { getInfoToken } = useLoginService();
  const user = getInfoToken();

  if (!user) {
    return null;
  }

  if (role && user.role !== role) {
    if (redirect) {
      window.location.href = redirect;
    }

    return null;
  }

  return <>{children}</>;
};