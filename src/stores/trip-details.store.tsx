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

type Action = {
  setTripDetails: (trip: TripDetailProps["trip"]) => void;
  setParticipants: (trip: ParticipantsDetails["participants"]) => void;
};

const useTripDetailStore = create<
  TripDetailProps & ParticipantsDetails & Action
>()((set) => ({
  setTripDetails: (trip) => {
    return set({ trip });
  },
  setParticipants: (participants) => set({ participants }),
}));

export default useTripDetailStore;
