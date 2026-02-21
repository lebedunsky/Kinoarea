import { kinoareaServerInstance } from "@/shared/api/axiosInstance";

import type { PayloadType } from "../types/types";

export const serverService = {
  sendMessageToAI: async (payload: PayloadType) => {
    try {
      const { message, userMovies, history } = payload;

      const res = await kinoareaServerInstance.post("/ai", { message, userMovies, history });

      return res.data;
    } catch (err) {
      console.error(err);
      throw err;
    }
  },
};
