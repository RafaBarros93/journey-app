import { Loader, Mail, User } from "lucide-react";
import { Modal } from "../../../components/modal";
import { Button } from "../../../components/button";
import { FormEvent } from "react";
import useCreateTripStore from "../../../stores/create-trip.store";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

export interface ModalConfirmTripProps {
  isOpenModalConfirmTrip: boolean;
  handlerOpenModalCofirmTrip: () => void;
  handlerCofirmTrip: (event: FormEvent<HTMLFormElement>) => void;
  isViewModalLoading: boolean;
}

export function ModalConfirmTrip(props: ModalConfirmTripProps) {
  const { name, setName, email, setEmail, destination, range } =
    useCreateTripStore();

  let dispaleydDate = null;

  if (range?.to && range.from) {
    dispaleydDate = range
      ? `${format(range.from, "d")} a ${format(range.to, "d")} de  ${format(
          range.to,
          "MMMM",
          { locale: ptBR }
        )}`
      : null;
  }

  return (
    <Modal
      isviewModal={props.isOpenModalConfirmTrip}
      handlerOpenModal={props.handlerOpenModalCofirmTrip}
      title="Confirmar criação da viagem"
      text={
        <>
          {" "}
          Para concluir a criação da viagem para{" "}
          <span className="text-zinc-100 font-semibold">{destination}</span>,
          Brasil nas datas de{" "}
          <span className="text-zinc-100 font-semibold">{dispaleydDate}</span>{" "}
          preencha seus dados abaixo:
        </>
      }
    >
      <form onSubmit={(e) => props.handlerCofirmTrip(e)} className="grid gap-2">
        <div className="h-14 px-4 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2">
          <User className="text-slate-400 size-5" />
          <input
            name="name"
            placeholder="Seu nome completo"
            value={name}
            onChange={({ target: { value } }) => setName(value)}
            className="bg-transparent text-lg placeholder-zinc-400 w-40 outline-none flex-1"
          />
        </div>

        <div className="py-2.5 px-4 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2">
          <Mail className="text-slate-400 size-5" />
          <input
            type="text"
            name="email"
            value={email}
            onChange={({ target: { value } }) => setEmail(value)}
            placeholder="Seu e-mail pessoal"
            className="bg-transparent text-lg placeholder-zinc-400 w-40 outline-none flex-1"
          />
        </div>

        {props.isViewModalLoading ? (
          <Button type="button" variant="terciary" size="full" disabled>
            <Loader className="animate-spin h-5 w-5 mr-3" />
            Salvando...
          </Button>
        ) : (
          <Button type="submit" variant="primary" size="full">
            Confirmar criação da viagem
          </Button>
        )}
      </form>
    </Modal>
  );
}
