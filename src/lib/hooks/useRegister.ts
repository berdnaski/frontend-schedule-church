import { useState } from "react";
import { RegisterUser } from "@/@types/auth";
import { registerUser } from "@/controllers/authService";

export function useRegister() {
  const [error, setError] = useState<string | null>(null);

  const register = async (userData: RegisterUser) => {
    setError(null);

    try {
      await registerUser(userData);
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      }
      throw new Error("Registration failed.");
    }
  };

  return { register, error };
}
