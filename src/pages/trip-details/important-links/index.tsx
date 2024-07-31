import { Link2, Plus } from "lucide-react";
import { Button } from "../../../components/button";
import { ModalCreateLink } from "../modal-link";
import { FormEvent, useEffect, useState } from "react";
import { QeuriesTrip } from "../../../service/query-trip";
import { useParams } from "react-router-dom";
import { CreateLinkResponse } from "../../../../interfaces/CreateLinkResponse";
import { CreateLinkRequest } from "../../../../interfaces/CreateLinkRequest";
import useTripDetailStore from "../../../stores/trip-details.store";

export function ImportantLink() {
  const { tripId } = useParams();
  const { createLink, getLinksByTripId } = QeuriesTrip();
  const { setLinks, links } = useTripDetailStore();
  const [id, setId] = useState<CreateLinkResponse | string>("");

  useEffect(() => {
    const getlistActivities = async () => {
      const links = await getLinksByTripId(tripId!);

      console.log("List", links);

      setLinks(links);
    };

    getlistActivities();
  }, [id]);

  const [isCreateActivityModalOpen, setIsCreateActivityModalOpen] =
    useState(false);

  function handlerOpeModalActivity() {
    setIsCreateActivityModalOpen(!isCreateActivityModalOpen);
  }

  async function handlerCofirmLink(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    try {
      const data = new FormData(event.currentTarget);

      const title = data.get("title");

      const url = data.get("url");

      if (title && url) {
        const newLink: CreateLinkRequest = {
          title,
          url,
        };

        const id = await createLink(tripId!, newLink);

        setId(id);
      }
      handlerOpeModalActivity();
    } catch (error) {
      console.log(error);
      /* alert(error); */
    }
  }

  return (
    <>
      <ModalCreateLink
        isCreateActivityModalOpen={isCreateActivityModalOpen}
        handlerOpeModalActivity={handlerOpeModalActivity}
        handlerCofirmLink={handlerCofirmLink}
      />

      <div className="space-y-6 ">
        <h2 className="font-semibold text-xl">Links importantes</h2>

        {links?.map((link) => (
          <>
            <div className="flex items-center justify-between gap-4">
              <div className="space-y-1.5">
                <span className="block font-medium text-zinc-100">
                  {link.title}
                </span>
                <a
                  href={link.url}
                  className="block text-xs text-zinc-400 truncate hover:text-zinc-200"
                >
                  {link.url}
                </a>
              </div>

              <Link2
                className="text-zinc-40 size-5 shrink-0 cursor-pointer"
                onClick={() => {
                  window.open(link.url);
                }}
              />
            </div>
          </>
        ))}

        {/*   <div className="flex items-center justify-between gap-4">
          <div className="space-y-1.5">
            <span className="block font-medium text-zinc-100">
              Reserva do AirBnB
            </span>
            <a
              href="#"
              className="block text-xs text-zinc-400 truncate hover:text-zinc-200"
            >
              https://www.airbnb.com.br/rooms/1047000114646464646464646464646464646464
            </a>
          </div>

          <Link2 className="text-zinc-40 size-5 shrink-0" />
        </div> */}

        <Button
          className="justify-center"
          type="button"
          variant="secondary"
          size="full"
          onClick={handlerOpeModalActivity}
        >
          <Plus />
          Cadastrar novo link
        </Button>
      </div>
    </>
  );
}
