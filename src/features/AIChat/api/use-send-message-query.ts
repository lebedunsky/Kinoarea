import { useMutation } from "@tanstack/react-query";

import { serverService } from "@/entities/server/api/server-service";
import { serverKeys } from "@/entities/server/store/server-keys";
import type { PayloadType } from "@/entities/server/types/types";

export const useSendMessageQuery = () => {
  const { mutateAsync } = useMutation({
    mutationFn: async ({ message, history, userMovies }: PayloadType) => {
      return serverService.sendMessageToAI({ message, history, userMovies });
    },
    mutationKey: [serverKeys.sendMessageToAI],
  });

  return {
    mutateAsync,
  };
};
