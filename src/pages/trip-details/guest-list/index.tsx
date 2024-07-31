import { CircleCheck, CircleDashed, UserCog } from "lucide-react";
import { Button } from "../../../components/button";
import { useParams } from "react-router-dom";
import useTripDetailStore from "../../../stores/trip-details.store";
import { QeuriesTrip } from "../../../service/query-trip";
import { useEffect } from "react";

export function GuestList() {
  const { tripId } = useParams();

  const { setParticipants, participants } = useTripDetailStore();

  const { getParcipantByTripId } = QeuriesTrip();

  useEffect(() => {
    const getTrip = async () => {
      const { participants } = await getParcipantByTripId(tripId!);

      setParticipants(participants);
    };

    getTrip();
  }, [tripId]);

  return (
    <div className="space-y-6">
      <h2 className="font-semibold text-xl">Convidados</h2>

      {participants?.map((participant, index) => (
        <>
          <div className="flex items-center justify-between gap-4" key={index}>
            <div className="space-y-1.5">
              <span className="block font-medium text-zinc-100">
                {participant.name ?? `Conviadado ${index}`}
              </span>
              <span className="block text-sm text-zinc-400 truncate">
                {participant.email}
              </span>
            </div>

            {participant.is_confirmed ? (
              <CircleCheck className="size-5 shrink-0 text-green-400" />
            ) : (
              <CircleDashed className="size-5 shrink-0 text-zinc-400" />
            )}
          </div>
        </>
      ))}

      {/*  <div className="flex items-center justify-between gap-4">
        <div className="space-y-1.5">
          <span className="block font-medium text-zinc-100">
            Dr. Rita Pacocha
          </span>
          <span className="block text-sm text-zinc-400 truncate">
            lacy.stiedemann@gmail.com
          </span>
        </div>

        <CircleCheck className="siz-5 text-lime-300" />
      </div> */}

      {/* <div className="flex items-center justify-between gap-4">
        <div className="space-y-1.5">
          <span className="block font-medium text-zinc-100">Jessica White</span>
          <span className="block text-sm text-zinc-400 truncate">
            jessica.white44@yahoo.com
          </span>
        </div>

        <CircleDashed className="siz-5 text-zinc-400" />
      </div>
 */}
      <Button type="button" variant="secondary" size="full">
        <UserCog />
        Gerenciar convidados
      </Button>
    </div>
  );
}
