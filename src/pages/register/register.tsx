// src/components/Register.tsx
import { Container } from "@/components/container/container";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useRegister } from "@/hooks/useRegister";  
import { useEffect, useState } from "react";
import { toast } from 'sonner'; 
import { FaUser, FaEnvelope, FaLock, FaGoogle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export function Register() {
    const navigate = useNavigate();
    const { register, error } = useRegister();  
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem('token');
        if(token) {
            localStorage.removeItem('token');
            navigate('/login');
        }
    }, [navigate])

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await register({ name, email, password });
            toast.success('Cadastro realizado com sucesso!');
        } catch {
            toast.error('Ocorreu um erro ao realizar o cadastro.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <Container>
            <div className="w-full min-h-screen flex justify-center items-center flex-col">
                <form onSubmit={handleSubmit} className="flex flex-col items-center gap-4">
                    <h1 className="text-white font-bold text-4xl">IISC</h1>
                    <div className="flex flex-col gap-4 w-96">
                        <Input 
                            type="text" 
                            name="name" 
                            placeholder="Digite o seu nome..." 
                            icon={<FaUser color="white" />}
                            value={name}
                            onChange={(e) => setName(e.target.value)} 
                        />
                        <Input 
                            type="email" 
                            name="email" 
                            placeholder="Digite o seu email..." 
                            icon={<FaEnvelope color="white" />} 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <Input 
                            type="password" 
                            name="password" 
                            placeholder="Digite a sua senha..." 
                            icon={<FaLock color="white" />} 
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    <div className="flex flex-col items-center justify-center h-32 w-full mt-4">
                        <Button 
                            type="submit" 
                            className="flex w-full bg-[#E6E6E6] text-black hover:bg-zinc-300"
                            disabled={isLoading}
                        >
                            Registrar
                        </Button>
                        {error && <p className="text-red-500">{error}</p>}
                        <span className="text-white font-semibold my-2">OU</span>
                        <Button type="button" className="bg-black w-full" icon={<FaGoogle />}>Entrar com Google</Button>
                    </div>

                    <div>
                        <span className="text-white font-thin">Já possui uma conta? <a href="/login" className="underline">Logar-se</a></span>
                    </div>
                </form>
            </div>
        </Container>
    );
}
