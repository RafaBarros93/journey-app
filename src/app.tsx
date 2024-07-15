import {
  MapPin,
  Calendar,
  UserRoundPlus,
  ArrowRight,
  Settings2,
} from "lucide-react";
import { FormEvent, useState } from "react";
import { Button } from "./components/button";
import { Modal } from "./components/modal";

export function App() {
  const [isGuestInputOpen, setIsGuestInputOpen] = useState(false);
  const [isGuestInputOpenModal, setIsGuestInputOpenModal] = useState(false);
  const [emailsToInvite, setEmailsToInvite] = useState<string[]>([]);

  function handlerGuestInput() {
    setIsGuestInputOpen(!isGuestInputOpen);
  }

  function handlerGuestModal() {
    setIsGuestInputOpenModal(!isGuestInputOpenModal);
  }

  function handlerConfirmModal(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const data = new FormData(event.currentTarget);

    const email = data.get("email")?.toString();

    if (!email) return;

    if (emailsToInvite.includes(email)) return;

    setEmailsToInvite([...emailsToInvite, email]);

    event.currentTarget.reset();
  }

  function handlerRemove(index: number) {
    const newArray = emailsToInvite.filter((_, i) => index !== i);
    setEmailsToInvite(newArray);
  }

  return (
    <div className="h-screen flex items-center justify-center bg-pattern bg-no-repeat bg-center">
      <div className="max-w-3xl w-full px-6 text-center space-y-10">
        <div className="flex flex-col items-center gap-3">
          <img src="/logo.svg" alt="plann.er"></img>

          <p className="text-zinc-300 text-lg">
            Convide seus amigos e planeje sua próxima viagem!
          </p>
        </div>

        <div className="space-y-4">
          <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center shadow-shape gap-3">
            <div className="flex items-center gap-2 flex-1 ">
              <MapPin className="size-5 text-zinc-400" />
              <input
                disabled={isGuestInputOpen}
                type="text"
                placeholder="Para onde você vai?"
                className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"
              />
            </div>

            <div className="flex items-center gap-2">
              <Calendar className="size-5 text-zinc-400" />
              <input
                disabled={isGuestInputOpen}
                type="text"
                placeholder="Quando?"
                className="bg-transparent text-lg placeholder-zinc-400 w-40 outline-none "
              />
            </div>

            <div className="w-px h-6 bg-zinc-800" />

            {!isGuestInputOpen ? (
              <Button
                type="button"
                handlerButton={handlerGuestInput}
                title="Continuar"
                icon={<ArrowRight />}
                style="bg-lime-300 text-lime-950 rounded-lg px-5 py-2 font-medium flex items-center gap-2 hover:bg-lime-400"
              />
            ) : (
              <Button
                type="button"
                handlerButton={handlerGuestInput}
                title="Alterar local/data"
                icon={<Settings2 />}
                style="bg-zinc-800 text-zinc-200 rounded-lg px-5 py-2 font-medium flex items-center gap-2 hover:bg-zinc-700"
              />
            )}
          </div>

          {isGuestInputOpen && (
            <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center shadow-shape gap-3">
              <button
                className="flex items-center gap-2 flex-1 "
                onClick={handlerGuestModal}
              >
                <UserRoundPlus className="size-5 text-zinc-400" />
                <span className="bg-transparent text-lg placeholder-zinc-400 outline-none flex items-start">
                  Quem estará na viagem?
                </span>
              </button>

              <div className="w-px h-6 bg-zinc-800" />

              <Button
                handlerButton={() => console.log("Teste")}
                type="button"
                title="Confirmar viagem"
                style="bg-lime-300 text-lime-950 rounded-lg px-5 py-2 font-medium flex items-center gap-2 hover:bg-lime-400"
                icon={<ArrowRight />}
              />
            </div>
          )}
        </div>

        <p className="text-sm text-zinc-500">
          Ao planejar sua viagem pela plann.er você automaticamente concorda{" "}
          <br /> com nossos{" "}
          <a className="text-zinc-300 underline" href="#">
            termos de uso
          </a>{" "}
          e{" "}
          <a href="#" className="text-zinc-300 underline">
            políticas de privacidade
          </a>
          .
        </p>
        <Modal
          isviewModal={isGuestInputOpenModal}
          handlerOpenModal={handlerGuestModal}
          handlerConfirm={(e: FormEvent<HTMLFormElement>) =>
            handlerConfirmModal(e)
          }
          emailsToInvite={emailsToInvite}
          handlerRemove={handlerRemove}
        />
      </div>
    </div>
  );
}
