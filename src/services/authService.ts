// src/services/authService.ts
import api from "@/api/axios";
import { RegisterUser } from "@/@types/auth";

export const registerUser = async (userData: RegisterUser): Promise<void> => {
  try {
    const res = await api.post('/register', userData);
    return res.data;
  } catch {
    console.error('Error during registration:');
    throw new Error('Ocorreu um erro ao tentar registrar!');
  }
};
