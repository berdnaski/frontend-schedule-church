export interface UserProps {
    uid: string;
    name: string | null;
    email: string | null;
  }
  
  export interface RegisterUser {
    name: string;
    email: string;
    password: string;
  }

  export interface AuthContextType {
    register: (userData: RegisterUser) => void;
    isLoading: boolean;
    error: string | null;
  }
