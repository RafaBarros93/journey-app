import { X, AtSign, Plus } from "lucide-react";
import { Button } from "../button";
import { FormEvent } from "react";

export type IModalProps = {
  isviewModal: boolean;
  handlerOpenModal: () => void;
  handlerConfirm: (e: FormEvent<HTMLFormElement>) => void;
  handlerRemove: (index: number) => void;
  emailsToInvite: string[];
};

export function Modal(props: IModalProps) {
  return (
    <>
      {props.isviewModal && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
          <div className="w-[640px] rounded-xl px-5 py-6 shadow-shape bg-zinc-900 grid gap-2">
            <div className="grid gap-2">
              <div className="flex items-start justify-between">
                <h2 className="text-lg font-semibold ">Selcionar convidados</h2>
                <X
                  className="cursor-pointer size-5 text-zinc-400"
                  onClick={props.handlerOpenModal}
                ></X>
              </div>
              <p className="text-sm text-zinc-400 text-start">
                Os convidados irão receber e-mails para confirmar a participação
                na viagem.
              </p>
            </div>
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
              onSubmit={(e) => props.handlerConfirm(e)}
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
          </div>
        </div>
      )}
    </>
  );
}
