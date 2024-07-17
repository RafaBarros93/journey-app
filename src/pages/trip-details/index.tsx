import { Calendar, CircleCheck, MapPin, Plus, Settings2 } from "lucide-react";
import { Button } from "../../components/button";

export function TripDetails() {
  return (
    <div className="max-w-6xl px-6 py-10 mx-auto grid gap-8">
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
            handlerButton={() => console.log("teste!")}
            title="Alterar local/data"
            icon={<Settings2 />}
            style="bg-zinc-800 text-zinc-200 rounded-lg px-5 py-2 font-medium flex items-center gap-2 hover:bg-zinc-700"
          />
        </div>
      </div>

      <main className="flex gap-16 px-4">
        <div className="flex-1 space-y-6">
          <div className="flex justify-between">
            <h2 className="text-3xl font-semibold">Atividdes</h2>
            <Button
              type="button"
              isLeftIcon={true}
              title="Cadastrar atividade"
              icon={<Plus />}
              style="bg-lime-300 text-lime-950 rounded-lg px-5 py-2 font-medium flex items-center gap-2 hover:bg-lime-400"
            />
          </div>

          <div className="space-x-8">
            <div className="space-y-2.5">
              <div className="flex gap-2 items-baseline">
                <span className="text-xl text-zinc-300 font-semibold">
                  Dia 17
                </span>
                <span className="text-xs text-zinc-500">Sábado</span>
              </div>
              <p className="text-zinc-500 text-sm">
                Nenhuma atividade cadastrada nessa data.
              </p>
            </div>
          </div>

          <div className="space-y-2.5">
            <div className="flex gap-2 items-baseline">
              <span className="text-xl text-zinc-300 font-semibold">
                Dia 18
              </span>
              <span className="text-xs text-zinc-500">Domingo</span>
            </div>

            <div className="space-y-2.5">
              <div className="px-4 py-2.5 bg-zinc-900 rounded-xl shadow-shape  flex items-center gap-3">
                <CircleCheck className="siz-5 text-lime-300" />
                <span className="text-zinc-100">Academia em grupo</span>

                <p className="text-zinc-400 text-sm ml-auto">08:00h</p>
              </div>
            </div>

            <div className="space-y-2.5">
              <div className="px-4 py-2.5 bg-zinc-900 rounded-xl shadow-shape  flex items-center gap-3">
                <CircleCheck className="siz-5 text-lime-300" />
                <span className="text-zinc-100">Academia em grupo</span>

                <p className="text-zinc-400 text-sm ml-auto">08:00h</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-80"></div>
      </main>
    </div>
  );
}
