import { Container } from "@/components/container/container";
import { Card } from "@/components/ui/card";

export function Dashboard() {
  return (
    <Container>
      <div className="flex flex-col items-center justify-center flex-grow px-4 py-8">
        <h1 className="text-2xl mb-8 text-center text-white font-semibold">O que você gostaria de fazer?</h1>

        <div className="flex flex-col gap-6">
          <Card className="w-full mx-auto p-6 bg-[#242323] hover:bg-[#1a1919] cursor-pointer transition-transform duration-300 ease-in-out hover:scale-105 text-white">
            <h2 className="text-xl font-semibold mb-4">Sou membro</h2>
            <span>Entrar em um departamento da igreja e me tornar participante.</span>
          </Card>

          <Card className="w-full mx-auto p-6 bg-[#242323] hover:bg-[#1a1919] cursor-pointer transition-transform duration-300 ease-in-out hover:scale-105 text-white">
            <h2 className="text-xl font-semibold mb-4">Sou líder</h2>
            <span>Lidere e organize escalas dos seus departamentos.</span>
          </Card>

          <Card className="w-full mx-auto p-6 bg-[#242323] hover:bg-[#1a1919] cursor-pointer transition-transform duration-300 ease-in-out hover:scale-105 text-white">
            <h2 className="text-xl font-semibold mb-4">Visitante</h2>
            <span>Quero apenas conhecer um pouco mais da igreja.</span>
          </Card>
        </div>
      </div>
    </Container>
  );
}
