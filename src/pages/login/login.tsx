// src/components/Login.tsx
import { useState } from 'react';
import { useLogin } from '@/hooks/useLogin';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner'; 
import { FaEnvelope, FaGoogle, FaLock } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

export function Login() {
  const { login } = useLogin();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      console.log('Attempting to log in with', { email, password });
      await login({ email, password });
      toast.success('Login realizado com sucesso!');
      alert('Login successful. Redirecionando para /dashboard');
      navigate('/dashboard'); 
    } catch (error) {
      console.error('Login error:', error);
      toast.error('Ocorreu um erro ao realizar o login.');
    }
  };
  

  return (
    <div className="w-full min-h-screen flex justify-center items-center flex-col">
      <form onSubmit={handleSubmit} className="flex flex-col items-center gap-4">
        <h1 className="text-white font-bold text-4xl">Login</h1>
        <div className="flex flex-col gap-4 w-96">
          <Input 
            type="email" 
            name="email" 
            placeholder="Digite seu email..." 
            icon={<FaEnvelope color="white" />} 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input 
            type="password" 
            name="password" 
            placeholder="Digite sua senha..." 
            icon={<FaLock color="white" />} 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="flex flex-col items-center justify-center h-32 w-full mt-4">
            <Button 
                type="submit" 
                className="flex w-full bg-[#E6E6E6] text-black hover:bg-zinc-300">Logar
            </Button>
            <span className="text-white font-semibold my-2">OU</span>
            <Button type="button" className="bg-black w-full" icon={<FaGoogle />}>Entrar com Google</Button>
        </div>

        <div>
            <span className="text-white font-thin">Não possui uma conta? <a href="/" className="underline">Registrar-se</a></span>
        </div>
      </form>
    </div>
  );
}
