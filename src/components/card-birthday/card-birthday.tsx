import { FaList } from "react-icons/fa";
import { Button } from "../ui/button";

export function CardBirthDay() {
    return(
      <>
        <div className="flex w-full justify-between items-center mt-4">
            <div className="flex flex-col justify-between">
              <div className="flex flex-col">
                <h1 className="text-left text-zinc-200 text-xl">Aniversariantes</h1>
                <span className="text-left text-zinc-500 font-thin">Agosto</span>
              </div>
            </div>
            <div className="flex flex-col justify-center h-full">
              <Button className="bg-transparent font-semibold hover:bg-transparent">Ver todos</Button>
            </div>
        </div>

        <div className="flex w-full items-center gap-2 mt-4 text-zinc-100 bg-[#161718] py-2 rounded-2xl">
            <div className="flex gap-2 items-center mx-4">
                <FaList />
                <h1>Lista vazia.</h1>
            </div>
        </div>
      </>
    )
}