import { CreateActivityRequest } from "../../interfaces/CreateActivityRequest";
import { CreateActivityResponse } from "../../interfaces/CreateActivityResponse";
import { CreateTripPropsRequest } from "../../interfaces/CreateTripPropsRequest";
import { CreateTripPropsResponse } from "../../interfaces/CreateTripPropsResponse";
import { GetActivitesResponse } from "../../interfaces/GetActivitesResponse";
import { ParticipantsDetails } from "../../interfaces/GetParticpantsDetailsResponde";
import { GetTripResponse } from "../../interfaces/GetTripDetailsResponse";

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

  const getTripById = async (id: string): Promise<GetTripResponse> => {
    const { data } = await api.get(`/trips/${id}`);

    return data;
  };

  const getParcipantByTripId = async (
    tripId: string
  ): Promise<ParticipantsDetails> => {
    const { data } = await api.get(`/trips/${tripId}/participants`);

    return data;
  };

  const createActivity = async (
    tripId: string,
    data: CreateActivityRequest
  ): Promise<CreateActivityResponse> => {
    const { data: id } = await api.post(`/trips/${tripId}/activities`, data);

    return id;
  };

  const getActivityByTripId = async (
    tripId: string
  ): Promise<GetActivitesResponse> => {
    const { data } = await api.get(`/trips/${tripId}/activities`);

    return data;
  };

  return {
    creatTrip,
    getTripById,
    getParcipantByTripId,
    createActivity,
    getActivityByTripId,
  };
}
