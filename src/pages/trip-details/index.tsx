import { FormEvent, useEffect, useState } from "react";
import { ModalCreateActivity } from "./modal-activity";
import { ImportantLink } from "./important-links";
import { GuestList } from "./guest-list";
import { Activities } from "./activities";
import { DestinationAndDate } from "./destination-and-date";
import { CreateActivityRequest } from "../../../interfaces/CreateActivityRequest";
import { useParams } from "react-router-dom";
import { QeuriesTrip } from "../../service/query-trip";
import useTripDetailStore from "../../stores/trip-details.store";
import { CreateActivityResponse } from "../../../interfaces/CreateActivityResponse";

export function TripDetails() {
  const { tripId } = useParams();
  const { setActivities } = useTripDetailStore();
  const [id, setId] = useState<CreateActivityResponse | string>("");
  const { getActivityByTripId } = QeuriesTrip();

  useEffect(() => {
    const getlistActivities = async () => {
      const listActivities = await getActivityByTripId(tripId!);

      console.log("List", listActivities);

      setActivities(listActivities);
    };

    getlistActivities();
  }, [id]);

  const { createActivity } = QeuriesTrip();

  const [isCreateActivityModalOpen, setIsCreateActivityModalOpen] =
    useState(false);

  function handlerOpeModalActivity() {
    setIsCreateActivityModalOpen(!isCreateActivityModalOpen);
  }

  async function handlerCofirmActivity(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    try {
      const data = new FormData(event.currentTarget);

      const title = data.get("title");

      const occurs_at = data.get("occurs_at");

      if (title && occurs_at) {
        const activity: CreateActivityRequest = {
          title,
          occurs_at,
        };

        const id = await createActivity(tripId!, activity);

        setId(id);
      }
      handlerOpeModalActivity();
    } catch (error) {
      console.log(error);
      /* alert(error); */
    }
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
