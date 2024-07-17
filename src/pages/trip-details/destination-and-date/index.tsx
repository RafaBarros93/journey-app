import { Calendar, MapPin, Settings2 } from "lucide-react";
import { Button } from "../../../components/button";

export function DestinationAndDate() {
  return (
    <div className="px-4 h-16 rounded-xl bg-zinc-900 shadow-shape flex items-center justify-between ">
      <div className="flex items-center gap-2">
        <MapPin className="size-5 text-zinc-400" />
        <span className=" text-zinc-100"> Contagem,Brasil</span>
      </div>

      <div className="flex items-center gap-5">
        <div className="flex items-center gap-2">
          <Calendar className="size-5 text-zinc-400" />
          <span className=" text-zinc-100">12 a 23 de Agosto</span>
        </div>

        <div className="w-px h-6 bg-zinc-800" />

        <Button
          type="button"
          onClick={() => console.log("teste!")}
          variant="secondary"
        >
          Alterar local/data
          <Settings2 />
        </Button>
      </div>
    </div>
  );
}
