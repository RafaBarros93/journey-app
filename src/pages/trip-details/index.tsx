import { FormEvent, useState } from "react";
import { ModalCreateActivity } from "./modal-activity";
import { ImportantLink } from "./important-links";
import { GuestList } from "./guest-list";
import { Activities } from "./activities";
import { DestinationAndDate } from "./destination-and-date";

export function TripDetails() {
  const [isCreateActivityModalOpen, setIsCreateActivityModalOpen] =
    useState(false);

  function handlerOpeModalActivity() {
    setIsCreateActivityModalOpen(!isCreateActivityModalOpen);
  }

  function handlerCofirmActivity(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  return (
    <div className="max-w-6xl px-6 py-10 mx-auto grid gap-8">
      <ModalCreateActivity
        isCreateActivityModalOpen={isCreateActivityModalOpen}
        handlerOpeModalActivity={handlerOpeModalActivity}
        handlerCofirmActivity={handlerCofirmActivity}
      />
      <DestinationAndDate />
      <main className="flex gap-16 px-4">
        <Activities handlerOpeModalActivity={handlerOpeModalActivity} />

        <div className="w-80 space-y-6">
          <ImportantLink />
          <div className="w-full h-px bg-zinc-800 grid"> </div>
          <GuestList />
        </div>
      </main>
    </div>
  );
}
