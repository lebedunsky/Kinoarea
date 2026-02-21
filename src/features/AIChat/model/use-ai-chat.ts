import { useState } from "react";

import type { UserMoviesType } from "@/entities/server/types/types";

import { useSendMessageQuery } from "../api/use-send-message-query";
import { DEFAULT_MESSAGE } from "../const";

export const useAIChat = () => {
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState([
    {
      message: DEFAULT_MESSAGE,
      isUser: false,
      id: Date.now(),
    },
  ]);

  const { mutateAsync } = useSendMessageQuery();

  const sendMessage = async (text: string, userMovies?: UserMoviesType[]) => {
    if (!text.trim()) return;

    const newHistory = [...messages, { isUser: true, message: text, id: Date.now() }];

    setMessages(newHistory);
    setIsTyping(true);

    const data = await mutateAsync({
      message: text,
      userMovies,
      history: newHistory,
    });

    setIsTyping(false);

    setMessages((prev) => {
      return [...prev, { isUser: false, message: data.choices[0].message.content, id: Date.now() }];
    });
  };

  return {
    isTyping,
    sendMessage,
    messages,
  };
};
