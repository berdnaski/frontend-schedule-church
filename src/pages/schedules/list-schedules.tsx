import { useState } from "react";
import { Button } from "@/components/ui/button";
import { CardSchedule } from "@/components/card-schedule/card-schedule";

export function ListSchedules() {
  const [selected, setSelected] = useState("proximas");

  return (
    <div className="flex flex-col items-center justify-center mt-6 mx-4">
      <div className="flex items-center justify-between gap-4 bg-[#161718] py-2 w-full rounded-3xl">
        <Button
          onClick={() => setSelected("proximas")}
          className={`flex-1 mx-2 h-8 font-bold ${
            selected === "proximas" ? "bg-gray-100 text-black" : "bg-transparent text-white"
          }`}
          style={{ backgroundColor: selected === "proximas" ? "#e5e7eb" : "transparent", color: selected === "proximas" ? "#000" : "#fff", border: "none", boxShadow: "none" }}
        >
          Próximas
        </Button>
        <Button
          onClick={() => setSelected("anteriores")}
          className={`flex-1 mx-2 h-8 font-bold ${
            selected === "anteriores" ? "bg-gray-100 text-black" : "bg-transparent text-white"
          }`}
          style={{ backgroundColor: selected === "anteriores" ? "#e5e7eb" : "transparent", color: selected === "anteriores" ? "#000" : "#fff", border: "none", boxShadow: "none" }}
        >
          Anteriores
        </Button>
      </div>

      <div className="flex mt-6 w-full">
        <CardSchedule />
      </div>
    </div>
  );
}
