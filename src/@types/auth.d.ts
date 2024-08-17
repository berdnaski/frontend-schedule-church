export interface AuthContextType {
    register: (name: string, email: string, password: string) => Promise<void>;
}
