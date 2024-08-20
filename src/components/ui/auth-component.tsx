import { useLoginService } from "@/lib/hooks/services/users/useLoginService";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();

  const user = getInfoToken();

  if (!user) {
    return null;
  }

  if (role && user.role !== role) {
    if (redirect) {
      navigate(redirect);
    }

    return null;
  }

  return <>{children}</>;
};
