import { useState, useRef, useEffect } from "react";
import Eu from "../../assets/eu.jpeg";
import Logo from "../../assets/logo.png"
import { GoOrganization } from "react-icons/go";
import { IoMdMenu } from "react-icons/io";
import { FaClipboardList, FaRegSun, FaRightFromBracket } from "react-icons/fa6";
import { FaRegCalendarAlt } from "react-icons/fa";
import { RiAdminFill } from "react-icons/ri";
import { useLoginService } from "@/lib/hooks/services/users/useLoginService";
import { useNavigate } from "react-router-dom";

export function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null); 
    const { logout } = useLoginService();
    const navigate = useNavigate();

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
                <a className="p-3 hover:bg-[#3b3b3b] text-white cursor-pointer hover:text-zinc-200 rounded-md transition-all">Perfil</a>
                <a className="p-3 hover:bg-[#3b3b3b] text-white cursor-pointer hover:text-zinc-200 rounded-md transition-all">Escalas</a>
                <a href="/admin" className="p-3 hover:bg-[#3b3b3b] text-white cursor-pointer hover:text-zinc-200 rounded-md transition-all">Área Administrativa</a>
                <a className="p-3 hover:bg-[#3b3b3b] text-white cursor-pointer hover:text-zinc-200 rounded-md transition-all">Configurações</a>
            </ul>

            {isMenuOpen && (
                <div 
                    className="fixed inset-0 bg-[#131212]  z-40 w-[300px] h-screen"
                    onClick={() => setIsMenuOpen(false)}
                />
            )}

            <div 
                ref={menuRef}
                className={`fixed xl:hidden top-0 left-0 h-screen w-[300px] z-50 transform transition-transform duration-300 ease-in-out
                ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}`}
            >
                <div className="flex flex-col h-full bg-[#131212] font-semibold text-lg text-white mx-2">
                    <div className="flex mt-4">
                        <img 
                            src={Logo} 
                            className="w-14"
                        />
                    </div>

                    <div className="flex mt-4 gap-4 items-center mx-4">
                        <div>
                            <img 
                                src={Eu} 
                                className="w-16 rounded-full border-4 border-[#292828]"
                            />
                        </div>
                        <div>
                            <h2 className="font-semibold text-lg">Erick Berdnaski</h2>
                            <span className="font-thin text-sm">@berdnaski</span>
                        </div>
                    </div>
                    
                    <div className="flex flex-col flex-grow mt-6">
                        <ul className="flex flex-col flex-grow">
                            <li 
                                className="list-none flex items-center gap-4 w-full md:text-center p-2 hover:bg-[#3b3b3b] cursor-pointer"
                            >   <GoOrganization />
                                Departamentos
                            </li>
                            <li className="list-none flex items-center gap-4 w-full md:text-center p-2 hover:bg-[#3b3b3b] cursor-pointer"
                            >   <FaRegCalendarAlt />
                                Indisponibilidades
                            </li>
                        </ul>

                        <div className="flex flex-col mt-auto">
                            <ul className="flex flex-col mb-4">
                                <li 
                                    className="list-none flex items-center gap-4 w-full md:text-center p-2 hover:bg-[#3b3b3b] cursor-pointer border-[#292828]"
                                >   <FaRegSun />
                                    Configurações
                                </li>
                                <li 
                                    className="flex items-center gap-4 list-none w-full md:text-center p-2 hover:bg-[#3b3b3b] cursor-pointer border-[#292828]"
                                >   <FaClipboardList />
                                    Repertório
                                </li>
                                <li 
                                    onClick={() => navigate('/admin')}
                                    className="flex items-center gap-4 list-none w-full md:text-center p-2 hover:bg-[#3b3b3b] cursor-pointer border-[#292828]"
                                >   <RiAdminFill />
                                    Área Administrativa
                                </li>
                            </ul>
                        </div>

                        <span className="border-t border-zinc-800 mb-4"></span>

                        <div className="flex mx-2 mb-4">
                            <button 
                                onClick={logout}
                                className="w-full flex text-red-400 items-center gap-4 md:text-center text-start hover:bg-[#3b3b3b] cursor-pointer border-[#292828]"
                            ><FaRightFromBracket />
                                Sair
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}
