import { database, get, ref } from "@/shared/config/firebase";

import type { UserPayloadType, UserResponseType } from "../types";

export const userService = {
  userFetch: async (payload: UserPayloadType): Promise<UserResponseType> => {
    try {
      const { uid } = payload;

      const res = await get(ref(database, `users/${uid}`));

      return { error: null, data: res.val() };
    } catch (error) {
      console.log(error);
      return { error, data: null };
    }
  },
};
