import { Container } from "@/components/container/container";
import { Button } from "@/components/ui/button";
import logoImg from "../../assets/eu.jpeg";
import { useNavigate } from "react-router-dom";
import { CardSchedule } from "@/components/card-schedule/card-schedule";
import { CardBirthDay } from "@/components/card-birthday/card-birthday";

export function Dashboard() {
  const navigate = useNavigate();

  return (
    <>
      <Container>
        <div className="flex flex-col w-full mt-6">
          <div className="flex w-full justify-between items-center">
            <div className="flex flex-col justify-between">
              <div className="flex flex-col">
                <h1 className="text-left text-zinc-200 text-xl">Ministérios</h1>
                <span className="text-left text-zinc-500 font-thin">Louvor</span>
              </div>
            </div>
            <div className="flex flex-col justify-center h-full">
              <Button className="bg-transparent font-semibold hover:bg-transparent">Visualizar</Button>
            </div>
          </div>

          <div className="flex mt-2">
            <img src={logoImg} alt="Logo" className="flex justify-start items-start mt-2 w-36 h-32 rounded-3xl object-cover" />
          </div>

          <div className="flex w-full justify-between items-center mt-2">
            <div className="flex flex-col justify-between">
              <div className="flex flex-col">
                <h1 className="text-left text-zinc-200 text-xl">Minhas escalas</h1>
                <span className="text-left text-zinc-500 font-thin">Próximas</span>
              </div>
            </div>
            <div className="flex flex-col justify-center h-full">
              <Button 
                onClick={() => navigate('/schedules')}
                className="bg-transparent font-semibold hover:bg-transparent"
              >
                Ver todas
              </Button>
            </div>
          </div>

          <div className="bg-[#161718] rounded-md mt-4">
            <CardSchedule />
          </div>

          <div>
            <CardBirthDay />  
          </div>
        </div>
      </Container>
    </>
  );
}
