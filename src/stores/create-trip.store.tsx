import { DateRange } from "react-day-picker";
import { create } from "zustand";

type CreateTripProps = {
  range: DateRange;
  destination: string;
  emailsToInvite: string[];
  name?: string;
  email?: string;
};

type Action = {
  setRange: (range: CreateTripProps["range"]) => void;
  setDetination: (destination: CreateTripProps["destination"]) => void;
  setEmailsToInvite: (email: string) => void;
  removeEmailByIndex: (index: number) => void;
  setName: (name: CreateTripProps["name"]) => void;
  setEmail: (email: CreateTripProps["email"]) => void;
};

const useCreateTripStore = create<CreateTripProps & Action>()((set, get) => ({
  range: {
    from: undefined,
    to: undefined,
  },
  setRange: (range) => set({ range }),
  destination: "",
  setDetination: (destination) => set({ destination }),
  emailsToInvite: [],
  setEmailsToInvite: (email: string) => {
    const emailsToInvite = get().emailsToInvite;

    return set({ emailsToInvite: [...emailsToInvite, email] });
  },
  removeEmailByIndex: (index: number) => {
    const newArray = get().emailsToInvite.filter((_, i) => index !== i);

    return set({ emailsToInvite: newArray });
  },
  name: "",
  setName: (name) => set({ name }),
  email: "",
  setEmail: (email) => set({ email }),
}));

export default useCreateTripStore;
