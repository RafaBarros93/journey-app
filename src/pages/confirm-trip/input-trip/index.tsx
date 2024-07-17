import { ArrowRight, Calendar, MapPin, Settings2 } from "lucide-react";
import { Button } from "../../../components/button";

interface InputTripProps {
  isGuestInputOpen: boolean;
  handlerGuestInput: () => void;
}

export function InputTrip({
  isGuestInputOpen,
  handlerGuestInput,
}: InputTripProps) {
  return (
    <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center shadow-shape gap-3">
      <div className="flex items-center gap-2 flex-1 ">
        <MapPin className="size-5 text-zinc-400" />
        <input
          disabled={isGuestInputOpen}
          type="text"
          placeholder="Para onde você vai?"
          className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"
        />
      </div>

      <div className="flex items-center gap-2">
        <Calendar className="size-5 text-zinc-400" />
        <input
          disabled={isGuestInputOpen}
          type="text"
          placeholder="Quando?"
          className="bg-transparent text-lg placeholder-zinc-400 w-40 outline-none "
        />
      </div>

      <div className="w-px h-6 bg-zinc-800" />

      {!isGuestInputOpen ? (
        <Button type="button" onClick={handlerGuestInput} variant="primary">
          Continuar
          <ArrowRight />
        </Button>
      ) : (
        <Button type="button" onClick={handlerGuestInput} variant="secondary">
          Alterar local/data
          <Settings2 />
        </Button>
      )}
    </div>
  );
}
