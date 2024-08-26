import { FaPen, FaThumbsUp } from "react-icons/fa";
import { IoIosNotificationsOutline, IoMdMusicalNote } from "react-icons/io";

import logoImg from "../../assets/eu.jpeg";
import { Button } from "../ui/button";

export function CardSchedule() {
    return(
        <div className="flex bg-[#161718] rounded-md w-full">
        <div className="flex flex-col items-center justify-center border-r border-zinc-700 px-4 py-2">
          <div className="text-zinc-200 flex flex-col items-center">
            <span className="text-md font-bold">18</span>
            <span className="text-md font-bold">JUN</span>
          </div>
          <div className="flex flex-col items-center mt-1">
            <span className="text-sm text-zinc-400">DOM</span>
            <span className="text-sm text-zinc-400">19:00</span>
          </div>
        </div>

        <div className="flex flex-col flex-grow px-4 py-2">
          <h1 className="text-blue-300 text-lg font-bold">Culto de ceia</h1>
          <span className="text-zinc-200 text-sm mb-2">daqui a 1 semana</span>

          <div className="flex items-center mb-2">
            <img src={logoImg} alt="Participantes" className="w-6 h-6 rounded-full mr-2" />
          </div>

          <div className="flex items-center justify-between w-full">
            <div className="flex items-center text-white text-sm">
              <span className="mr-2 flex gap-1 items-center">
                <FaThumbsUp />
                1/1
              </span>
              <span className="ml-2 flex items-center gap-1">
                <IoMdMusicalNote />
                <span>1</span>
              </span>

              <Button className="bg-transparent hover:bg-transparent">
                <IoIosNotificationsOutline color="red" />
              </Button>
            </div>

            <div className="ml-4">
              <FaPen color="white" size={14} />
            </div>
          </div>
        </div>
      </div>
    )
}