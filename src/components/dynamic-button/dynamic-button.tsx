import { useNavigate, useLocation } from 'react-router-dom';
import { CiCirclePlus } from "react-icons/ci";
import { Button } from "../ui/button";

interface DynamicButtonProps {
    onClick?: () => void;
}

export function DynamicButton({ onClick }: DynamicButtonProps) {
    const navigate = useNavigate();
    const location = useLocation();

    const handleClick = () => {
        if (onClick) {
            onClick();
        }

        let redirectTo = '';

        // Verifica a rota atual e define a rota de criação correspondente
        if (location.pathname.includes('/schedules')) {
            redirectTo = '/schedules/create';
        } else if (location.pathname.includes('/music')) {
            redirectTo = '/music/create';
        }
        // Adicione mais condições aqui conforme necessário

        if (redirectTo) {
            navigate(redirectTo);
        }
    };

    return (
        <Button className="bg-transparent hover:bg-transparent text-red-700" onClick={handleClick}>
            <CiCirclePlus size={40} />
        </Button>
    );
}
