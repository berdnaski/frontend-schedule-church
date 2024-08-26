import { useState, useRef, useEffect } from "react";
import Eu from "../../assets/eu.jpeg";
import { IoMdMenu } from "react-icons/io";
import { MobileMenu } from "../mobile-menu/mobile-menu";
import { DynamicButton } from "../dynamic-button/dynamic-button";

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
        <header className="flex justify-between items-center text-black py-4 px-4 bg-[#161718] drop-shadow-md relative">
            <IoMdMenu 
                size={30} 
                color="white" 
                className="xl:hidden block text-5xl cursor-pointer" 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
            />
            <div className="flex items-center justify-center gap-2">
                <DynamicButton />
                <img src={Eu} className="w-10 hover:scale-105 transition-all rounded-xl" alt="Logo" />
            </div>
            <ul className="hidden xl:flex items-center gap-4 font-semibold text-base">
                <a className="p-3 hover:bg-[#3b3b3b] text-white cursor-pointer hover:text-zinc-200 rounded-md transition-all">Perfil</a>
                <a className="p-3 hover:bg-[#3b3b3b] text-white cursor-pointer hover:text-zinc-200 rounded-md transition-all">Escalas</a>
                <a href="/admin" className="p-3 hover:bg-[#3b3b3b] text-white cursor-pointer hover:text-zinc-200 rounded-md transition-all">Área Administrativa</a>
                <a className="p-3 hover:bg-[#3b3b3b] text-white cursor-pointer hover:text-zinc-200 rounded-md transition-all">Configurações</a>
            </ul>

            <MobileMenu 
                menuRef={menuRef}
                isMenuOpen={isMenuOpen}
                closeMenu={() => setIsMenuOpen(false)}
            />
        </header>
    );
}
