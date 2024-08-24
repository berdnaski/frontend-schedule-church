import { api } from "@/api/axios";
import { RegisterUser, LoginUser, UserProps } from "@/@types/auth";

export const registerUser = async (userData: RegisterUser): Promise<void> => {
  try {
    await api.post("/register", userData);
  } catch (error) {
    console.error("Error registering user:", error);
    throw new Error("Failed to register user. Please try again later.");
  }
};

export const loginUser = async (userData: LoginUser): Promise<string> => {
  try {
    const res = await api.post("/login", userData);
    if (res.data && res.data.token) {
      localStorage.setItem("token", res.data.token);
      return res.data.token;
    } else {
      throw new Error("Login failed! No token received.");
    }
  } catch (error) {
    console.error("Error logging in:", error);
    throw new Error(
      "Failed to log in. Please check your credentials and try again."
    );
  }
};

export async function fetchUser(token: string): Promise<UserProps> {
  try {
    const res = await api.get("/user", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log("User fetched:", res.data); 
    return res.data;
  } catch (error) {
    console.error("Error fetching user:", error);
    throw new Error("Failed to fetch user. Please try again later.");
  }
}
