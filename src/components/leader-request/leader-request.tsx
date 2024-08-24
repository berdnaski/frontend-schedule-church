import { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@radix-ui/react-dialog";
import { Button } from "../ui/button";
import { FaArrowLeftLong } from "react-icons/fa6";
import { toast } from "sonner";
import { useCreateLeaderRequest } from "@/lib/hooks/services/leader-request/create-leader-request";

type RequestLeaderModalProps = {
  isOpen: boolean;
  onClose: () => void;
  userId: string;
};

export function RequestLeaderModal({
  isOpen,
  onClose,
  userId,
}: Readonly<RequestLeaderModalProps>) {
  const { execute, isLoading, isError, error } = useCreateLeaderRequest();

  const [showMessage, setShowMessage] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      console.log("userId", userId);
      await execute({ userId, status: "PENDING" });
      toast.success("Solicitação enviada com sucesso!");
      setShowMessage(true);
      handleClose();
    } catch {
      setShowMessage(true);
      console.error("Erro ao solicitar liderança:", error);
    }
  };

  const handleClose = () => {
    onClose();
    setShowMessage(false);
  };

  useEffect(() => {
    if (!isOpen) {
      setShowMessage(false);
    }
  }, [isOpen]);

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="fixed inset-0 h-screen w-full bg-[#121212] p-6 flex flex-col justify-center items-center z-50">
        <button onClick={handleClose} className="absolute top-4 left-4">
          <FaArrowLeftLong size={30} color="white" />
        </button>

        <div className="flex flex-col items-center text-center max-w-md">
          <div className="flex flex-col items-center bg-[#181818] py-8 px-2 rounded-2xl">
            <div className="flex flex-col items-center">
              <DialogTitle className="text-xl font-semibold text-white mb-4">
                Solicitar para se tornar Líder
              </DialogTitle>
              <DialogDescription className="text-sm text-zinc-400 mb-4">
                Você está prestes a solicitar para se tornar um líder. Um
                administrador precisará aprovar essa solicitação.
              </DialogDescription>
            </div>
            {isError && showMessage && (
              <p className="text-red-500 mb-4">
                {"Falha ao enviar a solicitação. Tente novamente."}
              </p>
            )}
            <form
              onSubmit={handleSubmit}
              className="w-full flex flex-col items-center"
            >
              <div className="flex space-x-2 w-full items-center justify-center">
                <Button
                  type="submit"
                  disabled={isLoading}
                  className="bg-blue-300 text-gray-800 font-sans hover:bg-blue-400 rounded-lg"
                >
                  {isLoading ? "Enviando..." : "Enviar Solicitação"}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
