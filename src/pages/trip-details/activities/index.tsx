import { CircleCheck, Plus } from "lucide-react";
import { Button } from "../../../components/button";
import useTripDetailStore from "../../../stores/trip-details.store";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

export interface ActivitiesProps {
  handlerOpeModalActivity: () => void;
}

export function Activities({ handlerOpeModalActivity }: ActivitiesProps) {
  const { listActivities } = useTripDetailStore();

  return (
    <div className="flex-1 space-y-6">
      <div className="flex justify-between">
        <h2 className="text-3xl font-semibold">Atividdes</h2>
        <Button
          onClick={handlerOpeModalActivity}
          type="button"
          variant="primary"
        >
          <Plus />
          Cadastrar atividade
        </Button>
      </div>

      {listActivities?.map((activity) => (
        <>
          {activity && activity.date && activity.activities && (
            <div className="space-x-8">
              <div className="space-y-2.5">
                <div className="flex gap-2 items-baseline">
                  <span className="text-xl text-zinc-300 font-semibold">
                    {format(activity.date!, "d")}
                  </span>
                  <span className="text-xs text-zinc-500">
                    {format(activity.date!, "EEEE", {
                      locale: ptBR,
                    })}
                  </span>
                </div>

                {activity.activities?.length > 0 ? (
                  <>
                    {activity.activities?.map((a) => (
                      <div className="px-4 py-2.5 bg-zinc-900 rounded-xl shadow-shape  flex items-center gap-3">
                        <CircleCheck className="siz-5 text-lime-300" />
                        <span className="text-zinc-100">{a.title}</span>

                        <p className="text-zinc-400 text-sm ml-auto">
                          {format(a.occurs_at, "HH:mm").concat("h")}
                        </p>
                      </div>
                    ))}
                  </>
                ) : (
                  <p className="text-zinc-500 text-sm">
                    Nenhuma atividade cadastrada nessa data.
                  </p>
                )}
              </div>
            </div>
          )}
        </>
      ))}

      {/* <div className="space-x-8">
        <div className="space-y-2.5">
          <div className="flex gap-2 items-baseline">
            <span className="text-xl text-zinc-300 font-semibold">Dia 17</span>
            <span className="text-xs text-zinc-500">Sábado</span>
          </div>
          <p className="text-zinc-500 text-sm">
            Nenhuma atividade cadastrada nessa data.
          </p>
        </div>
      </div>
 */}
      {/* <div className="space-y-2.5">
        <div className="flex gap-2 items-baseline">
          <span className="text-xl text-zinc-300 font-semibold">Dia 18</span>
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
      </div> */}
    </div>
  );
}
