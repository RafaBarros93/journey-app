import { CreateTripPropsRequest } from "../interfaces/CreateTripPropsRequest";
import { CreateTripPropsResponse } from "../interfaces/CreateTripPropsResponse";

import { api } from "./axios";

export function QeuriesTrip() {
  const creatTrip = async (
    trip: CreateTripPropsRequest
  ): Promise<CreateTripPropsResponse> => {
    const {
      data: { id },
    } = await api.post("/trips", trip);

    return id;
  };

  return {
    creatTrip,
  };
}
