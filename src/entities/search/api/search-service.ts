import { axiosInstance } from "@/shared/api/axiosInstance";

import { API_KEY } from "../const";
import type { PayloadType, SearchResponseType } from "../types";

export const searchService = {
  searchMulti: async (payload: PayloadType): Promise<SearchResponseType> => {
    try {
      const { query } = payload;

      const res = await axiosInstance.get("/search/multi", {
        params: {
          language: "uk-UA",
          api_key: API_KEY,
          query,
        },
      });

      return { error: null, data: res.data.results };
    } catch (error) {
      console.log(error);
      return { error, data: null };
    }
  },
};
