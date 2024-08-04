import { Calendar, MapPin, Settings2, RefreshCcw } from "lucide-react";
import { Button } from "../../../components/button";
import { useParams } from "react-router-dom";
import { ChangeEvent, useEffect, useState } from "react";
import { QeuriesTrip } from "../../../service/query-trip";

import useCreateTripStore from "../../../stores/create-trip.store";

import { DateRange, DayPicker } from "react-day-picker";
import { Modal } from "../../../components/modal";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { useNavigate } from "react-router-dom";
import { UpdateTripRequest } from "../../../../interfaces/UpdateTripRequest";

export function DestinationAndDate() {
  const navigate = useNavigate();
  const { tripId } = useParams();
  const [viewInputUpdate, setViewInputUpdate] = useState(false);
  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);
  let dispaleydDate = null;

  const { destination, setDestination, range, setRange } = useCreateTripStore();

  const { getTripById, updateTrip } = QeuriesTrip();

  useEffect(() => {
    const getTrip = async () => {
      const { trip } = await getTripById(tripId!);

      const { destination, starts_at, ends_at } = trip;

      const range = {
        from: new Date(starts_at),
        to: new Date(ends_at),
      };

      setRange(range);
      setDestination(destination);
    };

    getTrip();
  }, [tripId]);

  function handlerChangeDestination({
    target: { value },
  }: ChangeEvent<HTMLInputElement>) {
    setDestination(value);
  }

  function handlerDatePicker() {
    setIsDatePickerOpen(!isDatePickerOpen);
  }

  function handlerDate(range: DateRange | undefined) {
    if (range) setRange(range);
  }

  if (range?.to && range.from) {
    dispaleydDate = range
      ? `${format(range.from, "d").concat(
          ` ${format(range.from, "MMMM", { locale: ptBR })}`
        )}   a ${format(range.to, "d")} ${format(range.to, "MMMM", {
          locale: ptBR,
        })}`
      : null;
  }

  async function handlerGuestInput() {
    try {
      if (range.from && range.to) {
        const trip: UpdateTripRequest = {
          destination,
          starts_at: range.from,
          ends_at: range.to,
        };

        await updateTrip(tripId!, trip);

        navigate(0);
      }
    } catch (error) {
      alert(error);
    }
  }

  console.log(destination);

  return (
    <div className="px-4 h-16 rounded-xl bg-zinc-900 shadow-shape flex items-center justify-between ">
      <Modal
        handlerOpenModal={handlerDatePicker}
        isviewModal={isDatePickerOpen}
        title="Selcione a Data"
        size="auto"
      >
        <DayPicker
          className="my-day-picker"
          mode="range"
          selected={range}
          onSelect={(range) => handlerDate(range)}
        />
      </Modal>

      <div className="flex items-center gap-2">
        <MapPin className="size-5 text-zinc-400" />
        <input
          disabled={!viewInputUpdate}
          type="text"
          value={destination}
          placeholder="Para onde você vai?"
          className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"
          onChange={(e) => handlerChangeDestination(e)}
        />
      </div>

      <div className="flex items-center gap-5">
        <div className="flex items-center gap-2">
          <button
            disabled={!viewInputUpdate}
            className="flex items-center gap-2 text-left"
            onClick={handlerDatePicker}
          >
            <Calendar className="size-5 text-zinc-400" />
            <span className="text-lg text-zinc-400 w-40">
              {" "}
              {dispaleydDate || "Quando?"}{" "}
            </span>
          </button>
        </div>

        <div className="w-px h-6 bg-zinc-800" />

        {!viewInputUpdate ? (
          <Button
            type="button"
            onClick={() => setViewInputUpdate(!viewInputUpdate)}
            variant="secondary"
          >
            Alterar local/data
            <Settings2 />
          </Button>
        ) : (
          <Button type="button" onClick={handlerGuestInput} variant="primary">
            Atualizar
            <RefreshCcw />
          </Button>
        )}
      </div>
    </div>
  );
}
