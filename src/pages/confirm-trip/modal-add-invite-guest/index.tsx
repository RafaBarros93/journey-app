import { FormEvent } from "react";
import { Modal } from "../../../components/modal";
import { AtSign, Plus, X } from "lucide-react";
import { Button } from "../../../components/button";

export type ModalAddInviteGuestProps = {
  emailsToInvite: string[];
  isGuestInputOpenModal: boolean;
  handlerGuestModal: () => void;
  handlerRemove: (index: number) => void;
  handlerConfirmModal: (event: FormEvent<HTMLFormElement>) => void;
};

export function ModalAddInviteGuest(props: ModalAddInviteGuestProps) {
  return (
    <Modal
      isviewModal={props.isGuestInputOpenModal}
      handlerOpenModal={props.handlerGuestModal}
      title="Selcionar convidados"
      text="Os convidados irão receber e-mails para confirmar a participação na viagem."
    >
      <div className="flex flex-wrap gap-2">
        {props.emailsToInvite.length > 0 &&
          props.emailsToInvite.map((email, index) => (
            <div
              className="py-1.5 px-2.5 rounded-md bg-zinc-800 flex items-center gap-2"
              key={index}
            >
              <span className="text-zinc-300">{email}</span>
              <X
                className="cursor-pointer text-zinc-400 size-4"
                onClick={() => props.handlerRemove(index)}
              />
            </div>
          ))}
      </div>

      <div className="w-full h-px bg-zinc-800" />

      <form
        className="p-2.5 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2"
        onSubmit={(e) => props.handlerConfirmModal(e)}
      >
        <div className="px-2 flex items-center flex-1 gap-2">
          <AtSign className="text-slate-400 size-5" />
          <input
            type="email"
            name="email"
            placeholder="Digite o e-mail do convidado?"
            className="bg-transparent text-lg placeholder-zinc-400 w-40 outline-none flex-1"
          />
        </div>

        <Button
          type="submit"
          title="Confirmar"
          icon={<Plus />}
          style="bg-lime-300 text-lime-950 rounded-lg px-5 py-2 font-medium flex items-center gap-2 hover:bg-lime-400"
        />
      </form>
    </Modal>
  );
}
