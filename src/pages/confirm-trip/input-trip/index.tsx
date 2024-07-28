import { ArrowRight, Calendar, MapPin, Settings2 } from "lucide-react";
import { Button } from "../../../components/button";
import { Modal } from "../../../components/modal";
import { ChangeEvent, useState } from "react";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { DateRange, DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import "./index.css";
import useCreateTripStore from "../../../stores/create-trip.store";

interface InputTripProps {
  isGuestInputOpen: boolean;
  handlerGuestInput: () => void;
}

export function InputTrip({
  isGuestInputOpen,
  handlerGuestInput,
}: InputTripProps) {
  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);

  let dispaleydDate = null;
  function handlerDatePicker() {
    setIsDatePickerOpen(!isDatePickerOpen);
  }
  const { range, setRange, destination, setDetination } = useCreateTripStore();

  if (range?.to && range.from) {
    dispaleydDate = range
      ? `${format(range.from, "d")} a ${format(range.to, "d")} de  ${format(
          range.to,
          "MMMM",
          { locale: ptBR }
        )}`
      : null;
  }

  function handlerDate(range: DateRange | undefined) {
    if (range) setRange(range);
  }

  function handlerChangeDestination({
    target: { value },
  }: ChangeEvent<HTMLInputElement>) {
    setDetination(value);
  }

  return (
    <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center shadow-shape gap-3">
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

      <div className="flex items-center gap-2 flex-1 ">
        <MapPin className="size-5 text-zinc-400" />
        <input
          disabled={isGuestInputOpen}
          type="text"
          value={destination}
          placeholder="Para onde você vai?"
          className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"
          onChange={(e) => handlerChangeDestination(e)}
        />
      </div>

      <button
        disabled={isGuestInputOpen}
        className="flex items-center gap-2 text-left"
        onClick={handlerDatePicker}
      >
        <Calendar className="size-5 text-zinc-400" />
        <span className="text-lg text-zinc-400 w-40">
          {" "}
          {dispaleydDate || "Quando?"}{" "}
        </span>
      </button>

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
