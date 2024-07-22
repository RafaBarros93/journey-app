import { Mail, User } from "lucide-react";
import { Modal } from "../../../components/modal";
import { Button } from "../../../components/button";
import { FormEvent } from "react";
import useRangeStore from "../../../stores/create-trip.store";

export interface ModalConfirmTripProps {
  isOpenModalConfirmTrip: boolean;
  handlerOpenModalCofirmTrip: () => void;
  handlerCofirmTrip: (event: FormEvent<HTMLFormElement>) => void;
}

export function ModalConfirmTrip(props: ModalConfirmTripProps) {
  const { name, setName, email, setEmail } = useRangeStore();

  return (
    <Modal
      isviewModal={props.isOpenModalConfirmTrip}
      handlerOpenModal={props.handlerOpenModalCofirmTrip}
      title="Confirmar criação da viagem"
      text={
        <>
          {" "}
          Para concluir a criação da viagem para{" "}
          <span className="text-zinc-100 font-semibold">Florianópolis</span>,
          Brasil nas datas de{" "}
          <span className="text-zinc-100 font-semibold">
            16 a 27 de Agosto de 2024
          </span>{" "}
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

        <Button type="submit" variant="primary" size="full">
          Confirmar criação da viagem
        </Button>
      </form>
    </Modal>
  );
}
