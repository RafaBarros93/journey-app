import { useNavigate } from "react-router-dom";
import { FormEvent, useState } from "react";
import { ModalAddInviteGuest } from "./modal-add-invite-guest";
import { ModalConfirmTrip } from "./modal-confirm-trip";
import { InputTrip } from "./input-trip";
import { InputGuest } from "./input-invite-guest";
import useRangeStore from "../../stores/create-trip.store";

export function ConfirmTrip() {
  const navigate = useNavigate();

  const {
    emailsToInvite,
    setEmailsToInvite,
    removeEmailByIndex,
    email,
    name,
    range,
    destination,
  } = useRangeStore();

  const [isGuestInputOpen, setIsGuestInputOpen] = useState(false);
  const [isGuestInputOpenModal, setIsGuestInputOpenModal] = useState(false);
  const [isOpenModalConfirmTrip, setIsOpenModalConfirmTrip] = useState(false);

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

    setEmailsToInvite(email);

    event.currentTarget.reset();
  }

  function handlerRemove(index: number) {
    removeEmailByIndex(index);
  }

  function handlerOpenModalCofirmTrip() {
    setIsOpenModalConfirmTrip(!isOpenModalConfirmTrip);
  }
  function handlerCofirmTrip(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    return navigate(`/trips/123`);
  }

  return (
    <div className="h-screen flex items-center justify-center bg-pattern bg-no-repeat bg-center">
      <ModalAddInviteGuest
        isGuestInputOpenModal={isGuestInputOpenModal}
        handlerGuestModal={handlerGuestModal}
        handlerRemove={handlerRemove}
        handlerConfirmModal={handlerConfirmModal}
        emailsToInvite={emailsToInvite}
      />

      <ModalConfirmTrip
        isOpenModalConfirmTrip={isOpenModalConfirmTrip}
        handlerCofirmTrip={handlerCofirmTrip}
        handlerOpenModalCofirmTrip={handlerOpenModalCofirmTrip}
      />

      <div className="max-w-3xl w-full px-6 text-center space-y-10">
        <div className="flex flex-col items-center gap-3">
          <img src="/logo.svg" alt="plann.er"></img>

          <p className="text-zinc-300 text-lg">
            Convide seus amigos e planeje sua próxima viagem!
          </p>
        </div>

        <div className="space-y-4">
          <InputTrip
            isGuestInputOpen={isGuestInputOpen}
            handlerGuestInput={handlerGuestInput}
          />

          <InputGuest
            isGuestInputOpen={isGuestInputOpen}
            totalInivtes={emailsToInvite.length}
            handlerOpenModalCofirmTrip={handlerOpenModalCofirmTrip}
            handlerGuestModal={handlerGuestModal}
          />
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
      </div>
    </div>
  );
}
