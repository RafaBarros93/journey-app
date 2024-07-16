import { ArrowRight, UserRoundPlus } from "lucide-react";
import { Button } from "../../../components/button";

interface InputTripProps {
  isGuestInputOpen: boolean;
  handlerGuestModal: () => void;
  totalInivtes: number;
  handlerOpenModalCofirmTrip: () => void;
}

export function InputGuest({
  isGuestInputOpen,
  handlerGuestModal,
  totalInivtes,
  handlerOpenModalCofirmTrip,
}: InputTripProps) {
  return (
    <>
      {isGuestInputOpen && (
        <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center shadow-shape gap-3">
          <button
            className="flex items-center gap-2 flex-1 "
            onClick={handlerGuestModal}
          >
            <UserRoundPlus className="size-5 text-zinc-400" />

            {totalInivtes > 0 ? (
              <span className="bg-transparent text-lg placeholder-zinc-100 outline-none flex items-start">
                {totalInivtes} pessoa(s) convidada(s)
              </span>
            ) : (
              <span className="bg-transparent text-lg placeholder-zinc-400 outline-none flex items-start">
                Selcionar convidados
              </span>
            )}
          </button>

          <div className="w-px h-6 bg-zinc-800" />

          <Button
            handlerButton={handlerOpenModalCofirmTrip}
            type="button"
            title="Confirmar viagem"
            style="bg-lime-300 text-lime-950 rounded-lg px-5 py-2 font-medium flex items-center gap-2 hover:bg-lime-400"
            icon={<ArrowRight />}
          />
        </div>
      )}
    </>
  );
}
