import { CircleCheck, CircleDashed, UserCog } from "lucide-react";
import { Button } from "../../../components/button";

export function GuestList() {
  return (
    <div className="space-y-6">
      <h2 className="font-semibold text-xl">Convidados</h2>

      <div className="flex items-center justify-between gap-4">
        <div className="space-y-1.5">
          <span className="block font-medium text-zinc-100">
            Dr. Rita Pacocha
          </span>
          <span className="block text-sm text-zinc-400 truncate">
            lacy.stiedemann@gmail.com
          </span>
        </div>

        <CircleCheck className="siz-5 text-lime-300" />
      </div>

      <div className="flex items-center justify-between gap-4">
        <div className="space-y-1.5">
          <span className="block font-medium text-zinc-100">Jessica White</span>
          <span className="block text-sm text-zinc-400 truncate">
            jessica.white44@yahoo.com
          </span>
        </div>

        <CircleDashed className="siz-5 text-zinc-400" />
      </div>

      <Button type="button" variant="secondary" size="full">
        <UserCog />
        Gerenciar convidados
      </Button>
    </div>
  );
}
