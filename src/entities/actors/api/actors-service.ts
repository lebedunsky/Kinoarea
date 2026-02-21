import { axiosInstance } from "@/shared/api/axiosInstance";

import { API_KEY } from "../const";
import type {
  ActorImagesResponseType,
  ActorResponseType,
  ActorsMovieResponseType,
  PayloadType,
  PopularActorsResponseType,
} from "../types";

export const actorsService = {
  movieActorsFetch: async (payload: PayloadType): Promise<ActorsMovieResponseType> => {
    try {
      const { id } = payload;

      const res = await axiosInstance.get(`/movie/${id}/credits`, {
        params: {
          api_key: API_KEY,
          language: "uk-UA",
        },
      });

      return { error: null, data: res.data };
    } catch (error) {
      console.log(error);
      return { error, data: null };
    }
  },
  actorFetch: async (payload: PayloadType): Promise<ActorResponseType> => {
    try {
      const { id } = payload;

      const res = await axiosInstance.get(`/person/${id}`, {
        params: {
          api_key: API_KEY,
          language: "uk-UA",
        },
      });

      return { error: null, data: res.data };
    } catch (error) {
      console.log(error);
      return { error, data: null };
    }
  },
  actorImagesFetch: async (payload: PayloadType): Promise<ActorImagesResponseType> => {
    try {
      const { id } = payload;

      const res = await axiosInstance.get(`/person/${id}/images`, {
        params: {
          api_key: API_KEY,
          language: "uk-UA",
        },
      });

      return { error: null, data: res.data };
    } catch (error) {
      console.log(error);
      return { error, data: null };
    }
  },
  popularActorsFetch: async (payload: PayloadType): Promise<PopularActorsResponseType> => {
    try {
      const { page } = payload;
      const res = await axiosInstance.get(`/person/popular`, {
        params: {
          api_key: API_KEY,
          language: "uk-UA",
          page: page,
        },
      });
      return { error: null, data: res.data };
    } catch (error) {
      console.log(error);
      return { error, data: null };
    }
  },
};
