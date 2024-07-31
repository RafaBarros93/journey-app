import { create } from "zustand";

export type TripDetailProps = {
  trip?: {
    id: string;
    destination: string;
    starts_at: string;
    ends_at: string;
    is_confirmed: boolean;
  };
};

export type ParticipantsDetails = {
  participants?: [
    {
      id: string;
      name: string;
      email: string;
      is_confirmed: boolean;
      is_owner: boolean;
      trip_id: string;
    }
  ];
};

export type ActivitiesProps = {
  date?: string;
  activities?: [
    { id: string; title: string; occurs_at: string; trip_id: string }
  ];
};

export type ListActivitiesProps = {
  listActivities?: ActivitiesProps[];
};

type Action = {
  setTripDetails: (trip: TripDetailProps["trip"]) => void;
  setParticipants: (trip: ParticipantsDetails["participants"]) => void;

  setActivities: (listActivities: ListActivitiesProps) => void;
};

const useTripDetailStore = create<
  TripDetailProps & ParticipantsDetails & Action & ListActivitiesProps
>()((set) => ({
  setTripDetails: (trip) => {
    return set({ trip });
  },
  isViewModalLoading: false,
  setParticipants: (participants) => set({ participants }),
  setActivities: (state) => set({ listActivities: [...state.listActivities!] }),
}));

export default useTripDetailStore;
