import { Container } from "@/components/container/container"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { FaUser, FaEnvelope, FaLock, FaGoogle } from "react-icons/fa"

export function Register() {
  return (
    <Container>
      <div className="w-full min-h-screen flex justify-center items-center flex-col">
        <form className="flex flex-col items-center gap-4">
          <h1 className="text-white font-bold text-4xl">IISC</h1>
          <div className="flex flex-col gap-4 w-96">
            <Input 
                type="text" 
                name="name" 
                placeholder="Digite o seu nome..." 
                icon={<FaUser color="white" />} />
            <Input 
                type="email" 
                name="email" 
                placeholder="Digite o seu email..." 
                icon={<FaEnvelope color="white" />} />
            <Input 
                type="password" 
                name="password" 
                placeholder="Digite a sua senha..." 
                icon={<FaLock color="white" />} />
          </div>

          <div className="flex flex-col items-center justify-center h-32 w-full mt-4">
            <Button 
                type="submit" 
                className="flex w-full bg-[#E6E6E6] text-black hover:bg-zinc-300">Registrar
            </Button>
            <span className="text-white font-semibold my-2">OU</span>
            <Button type="button" className="bg-black w-full" icon={<FaGoogle />}>Entrar com Google</Button>
          </div>

          <div>
            <span className="text-white font-thin">Já possui uma conta? <a href="/login" className="underline">Logar-se</a></span>
          </div>
        </form>
      </div>
    </Container>
  )
}
