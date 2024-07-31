import { Link2, Tag } from "lucide-react";
import { Modal } from "../../../components/modal";
import { Button } from "../../../components/button";
import { FormEvent } from "react";

export interface ModalCreateActivityProps {
  isCreateActivityModalOpen: boolean;
  handlerOpeModalActivity: () => void;
  handlerCofirmLink: (event: FormEvent<HTMLFormElement>) => void;
}

export function ModalCreateLink(props: ModalCreateActivityProps) {
  return (
    <Modal
      isviewModal={props.isCreateActivityModalOpen}
      handlerOpenModal={props.handlerOpeModalActivity}
      title="Cadastrar link"
      text="Todos convidados podem visualizar os links importantes."
    >
      <form onSubmit={(e) => props.handlerCofirmLink(e)} className="space-y-3">
        <div className="h-14 px-4 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2">
          <Tag className="text-slate-400 size-5" />
          <input
            name="title"
            placeholder="Título do link"
            className="bg-transparent text-lg placeholder-zinc-400 w-40 outline-none flex-1"
          />
        </div>

        <div className="flex items-center gap-2">
          <div className="h-14 px-4 bg-zinc-950 border border-zinc-800 rounded-lg flex flex-1 items-center gap-2">
            <Link2 className="text-slate-400 size-5" />
            <input
              type="text"
              name="url"
              placeholder="URL"
              className="bg-transparent text-lg placeholder-zinc-400 w-40 outline-none flex-1"
            />
          </div>
        </div>

        <Button type="submit" variant="primary" size="full">
          Salvar link
        </Button>
      </form>
    </Modal>
  );
}
