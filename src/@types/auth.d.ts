import { Dispatch, SetStateAction } from 'react';

export interface UserProps {
  uid: string;
  name: string;
  email: string;
  role: 'ADMIN' | 'MEMBER' | 'LEADER';
}

export interface RegisterUser {
  name: string;
  email: string;
  password: string;
}

export interface LoginUser {
  email: string;
  password: string;
}

export interface AuthContextType {
  register: (userData: RegisterUser) => Promise<void>;
  login: (userData: LoginUser) => Promise<void>;
  user: UserProps | null; 
  setUser: Dispatch<SetStateAction<UserProps | null>>;
  isAdmin: () => boolean; // Função que verifica se o usuário é admin
}

export interface CreateLeaderRequestDTO {
  userId: string;
  status: "PENDING";
}

export interface LeaderRequestResponse {
  message: string;
}

export interface LeaderRequest {
  id: string;
  userId: string;
  status: "PENDING" | "APPROVED" | "REJECTED";
}
