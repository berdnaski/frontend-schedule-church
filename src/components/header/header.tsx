import { useState, useRef, useEffect } from "react";
import Eu from "../../assets/eu.jpeg";
import { IoMdMenu } from "react-icons/io";

export function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null); 

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setIsMenuOpen(false);
            }
        }

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <header className="flex justify-between items-center text-black py-6 px-8 bg-[#161718] drop-shadow-md relative">
            <IoMdMenu 
                size={30} 
                color="white" 
                className="xl:hidden block text-5xl cursor-pointer" 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
            />
            <img src={Eu} className="w-12 hover:scale-105 transition-all rounded-full" alt="Logo" />

            <ul className="hidden xl:flex items-center gap-4 font-semibold text-base">
                <a className="p-3 hover:bg-[#121212] text-white cursor-pointer hover:text-zinc-200 rounded-md transition-all">Perfil</a>
                <a className="p-3 hover:bg-[#121212] text-white cursor-pointer hover:text-zinc-200 rounded-md transition-all">Escalas</a>
                <a href="/admin" className="p-3 hover:bg-[#121212] text-white cursor-pointer hover:text-zinc-200 rounded-md transition-all">Área Administrativa</a>
                <a className="p-3 hover:bg-[#121212] text-white cursor-pointer hover:text-zinc-200 rounded-md transition-all">Configurações</a>
            </ul>

            {isMenuOpen && (
                <div 
                    className="fixed inset-0 bg-black z-40 w-[300px] h-screen"
                    onClick={() => setIsMenuOpen(false)}
                />
            )}

            <div 
                ref={menuRef}
                className={`fixed xl:hidden top-0 left-0 h-screen w-[300px] z-50 bg-black transform transition-transform duration-300 ease-in-out
                ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}`}
            >
                <div className="flex flex-col h-full bg-black font-semibold text-lg text-white">
                    <ul className="flex flex-col flex-grow mt-24">
                        <li className="list-none w-full md:text-center p-4 hover:bg-[#121212] cursor-pointer">
                            Perfil
                        </li>
                        <li className="list-none w-full md:text-center p-4 hover:bg-[#121212] cursor-pointer">
                            Departamentos
                        </li>
                        <li className="list-none w-full md:text-center p-4 hover:bg-[#121212] cursor-pointer">
                            Área Administrativa
                        </li>
                        <li className="list-none w-full md:text-center p-4 hover:bg-[#121212] cursor-pointer">
                            Configurações
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    );
}
