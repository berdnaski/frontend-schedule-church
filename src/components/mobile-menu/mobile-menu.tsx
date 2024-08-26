import { GoOrganization } from "react-icons/go";
import { FaClipboardList, FaRegSun, FaRegCalendarAlt } from "react-icons/fa";
import { RiAdminFill } from "react-icons/ri";
import { FaRightFromBracket } from "react-icons/fa6";
import Eu from "../../assets/eu.jpeg";
import Logo from "../../assets/logo.png";
import { useNavigate } from "react-router-dom";
import { useLoginService } from "@/lib/hooks/services/users/useLoginService";

interface MobileMenuProps {
    menuRef: React.RefObject<HTMLDivElement>;
    isMenuOpen: boolean;
    closeMenu: () => void;
}

export function MobileMenu({ menuRef, isMenuOpen, closeMenu }: MobileMenuProps) {
    const { logout } = useLoginService();
    const navigate = useNavigate();

    return (
        <>
            {isMenuOpen && (
                <div
                    className="fixed inset-0 bg-[#131212] z-40 w-[300px] h-screen"
                    onClick={closeMenu}
                />
            )}

            <div
                ref={menuRef}
                className={`fixed xl:hidden top-0 left-0 h-screen w-[300px] z-50 transform transition-transform duration-300 ease-in-out
                ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}`}
            >
                <div className="flex flex-col h-full bg-[#131212] font-semibold text-lg text-white mx-2">
                    <div className="flex mt-4">
                        <img src={Logo} className="w-14" />
                    </div>

                    <div className="flex mt-4 gap-4 items-center mx-4">
                        <div>
                            <img src={Eu} className="w-16 rounded-full border-4 border-[#292828]" />
                        </div>
                        <div>
                            <h2 className="font-semibold text-lg">Erick Berdnaski</h2>
                            <span className="font-thin text-sm">@berdnaski</span>
                        </div>
                    </div>

                    <div className="flex flex-col flex-grow mt-6">
                        <ul className="flex flex-col flex-grow">
                            <li className="list-none flex items-center gap-4 w-full md:text-center p-2 hover:bg-[#3b3b3b] cursor-pointer">
                                <GoOrganization />
                                Departamentos
                            </li>
                            <li className="list-none flex items-center gap-4 w-full md:text-center p-2 hover:bg-[#3b3b3b] cursor-pointer">
                                <FaRegCalendarAlt />
                                Indisponibilidades
                            </li>
                        </ul>

                        <div className="flex flex-col mt-auto">
                            <ul className="flex flex-col mb-4">
                                <li className="list-none flex items-center gap-4 w-full md:text-center p-2 hover:bg-[#3b3b3b] cursor-pointer border-[#292828]">
                                    <FaRegSun />
                                    Configurações
                                </li>
                                <li className="flex items-center gap-4 list-none w-full md:text-center p-2 hover:bg-[#3b3b3b] cursor-pointer border-[#292828]">
                                    <FaClipboardList />
                                    Repertório
                                </li>
                                <li
                                    onClick={() => navigate('/admin')}
                                    className="flex items-center gap-4 list-none w-full md:text-center p-2 hover:bg-[#3b3b3b] cursor-pointer border-[#292828]"
                                >
                                    <RiAdminFill />
                                    Área Administrativa
                                </li>
                            </ul>
                        </div>

                        <span className="border-t border-zinc-800 mb-4"></span>

                        <div className="flex mx-2 mb-4">
                            <button
                                onClick={logout}
                                className="w-full flex text-red-400 items-center gap-4 md:text-center text-start hover:bg-[#3b3b3b] cursor-pointer border-[#292828]"
                            >
                                <FaRightFromBracket />
                                Sair
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
