import { Calendar, MapPin, Settings2 } from "lucide-react";
import { Button } from "../../../components/button";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { QeuriesTrip } from "../../../service/query-trip";
import useTripDetailStore from "../../../stores/trip-details.store";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

export function DestinationAndDate() {
  const { tripId } = useParams();

  const { setTripDetails, trip } = useTripDetailStore();

  const { getTripById } = QeuriesTrip();

  useEffect(() => {
    const getTrip = async () => {
      const { trip } = await getTripById(tripId!);

      setTripDetails(trip);
    };

    getTrip();
  }, [tripId]);

  return (
    <div className="px-4 h-16 rounded-xl bg-zinc-900 shadow-shape flex items-center justify-between ">
      <div className="flex items-center gap-2">
        <MapPin className="size-5 text-zinc-400" />
        <span className=" text-zinc-100"> {trip?.destination}</span>
      </div>

      <div className="flex items-center gap-5">
        <div className="flex items-center gap-2">
          <Calendar className="size-5 text-zinc-400" />

          {trip && (
            <span className=" text-zinc-100">{`${format(
              trip.starts_at,
              "d"
            )} a ${format(trip.ends_at, "d")} de  ${format(
              trip.ends_at,
              "MMMM",
              {
                locale: ptBR,
              }
            )}`}</span>
          )}
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
