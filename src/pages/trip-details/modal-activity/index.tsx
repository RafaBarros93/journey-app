import { Calendar, Tag } from "lucide-react";
import { Modal } from "../../../components/modal";
import { Button } from "../../../components/button";
import { FormEvent } from "react";

export interface ModalCreateActivityProps {
  isCreateActivityModalOpen: boolean;
  handlerOpeModalActivity: () => void;
  handlerCofirmActivity: (event: FormEvent<HTMLFormElement>) => void;
}

export function ModalCreateActivity(props: ModalCreateActivityProps) {
  return (
    <Modal
      isviewModal={props.isCreateActivityModalOpen}
      handlerOpenModal={props.handlerOpeModalActivity}
      title="Cadastrar atividade"
      text="Todos convidados podem visualizar as atividades."
    >
      <form
        onSubmit={(e) => props.handlerCofirmActivity(e)}
        className="space-y-3"
      >
        <div className="h-14 px-4 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2">
          <Tag className="text-slate-400 size-5" />
          <input
            name="title"
            placeholder="Qual a atividade?"
            className="bg-transparent text-lg placeholder-zinc-400 w-40 outline-none flex-1"
          />
        </div>

        <div className="flex items-center gap-2">
          <div className="h-14 px-4 bg-zinc-950 border border-zinc-800 rounded-lg flex flex-1 items-center gap-2">
            <Calendar className="text-slate-400 size-5" />
            <input
              type="datetime-local"
              name="occurs_at"
              placeholder="Data e horário da atividade"
              className="bg-transparent text-lg placeholder-zinc-400 w-40 outline-none flex-1"
            />
          </div>
        </div>

        <Button type="submit" variant="primary" size="full">
          Salvar atividade
        </Button>
      </form>
    </Modal>
  );
}
