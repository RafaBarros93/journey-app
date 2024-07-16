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
        <Button
          type="button"
          handlerButton={handlerGuestInput}
          title="Continuar"
          icon={<ArrowRight />}
          style="bg-lime-300 text-lime-950 rounded-lg px-5 py-2 font-medium flex items-center gap-2 hover:bg-lime-400"
        />
      ) : (
        <Button
          type="button"
          handlerButton={handlerGuestInput}
          title="Alterar local/data"
          icon={<Settings2 />}
          style="bg-zinc-800 text-zinc-200 rounded-lg px-5 py-2 font-medium flex items-center gap-2 hover:bg-zinc-700"
        />
      )}
    </div>
  );
}
