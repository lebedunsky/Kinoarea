import { useEffect, useRef, useState, type ChangeEvent, type KeyboardEvent } from "react";

import { useUser } from "@/app/providers/user";
import { ContainerUI } from "@/shared/ui/ContainerUI";
import { icons, SvgIcon } from "@/shared/ui/SvgIcon";

import { useAIChat } from "../../model/use-ai-chat";
import { ChatMessage } from "../ChatMessage/ChatMessage";
import {
  StyledAIChat,
  StyledAIChatContainer,
  StyledBotTyping,
  StyledBotTypingDote,
  StyledChatHeader,
  StyledChatWindow,
  StyledFooter,
  StyledInput,
  StyledMessageContainer,
  StyledSendButton,
  StyledTitle,
} from "./styled";

export const AIChat = () => {
  const [isOpenChat, setIsOpenChat] = useState(false);
  const [isShown, setIsShown] = useState(false);
  const [userMessage, setUserMessage] = useState("");

  const messagesContainerRef = useRef<HTMLDivElement>(null);

  const { user } = useUser();

  const { sendMessage, isTyping, messages } = useAIChat();

  useEffect(() => {
    const handler = () => {
      if (window.scrollY > 300) setIsShown(true);
    };

    document.addEventListener("scroll", handler);
    return () => document.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    messagesContainerRef?.current?.scrollTo({
      behavior: "smooth",
      top: messagesContainerRef.current?.scrollHeight,
    });
  }, [messages]);

  const handleSend = async () => {
    setUserMessage("");
    await sendMessage(userMessage, user?.savedMovies);
  };

  const handleCloseChat = () => {
    setIsOpenChat(false);
  };

  const handleOpenChat = () => {
    setIsOpenChat(true);
  };

  const handleKeyDown = async (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && userMessage.trim() && !isTyping) {
      await handleSend();
    }
  };

  const handleChangeText = (event: ChangeEvent<HTMLInputElement>) => {
    setUserMessage(event.target.value);
  };

  return (
    <ContainerUI>
      <StyledAIChatContainer $isShown={isShown} $isOpenChat={isOpenChat}>
        <StyledChatWindow $isOpenChat={isOpenChat}>
          <StyledChatHeader>
            <StyledTitle>AI асистент</StyledTitle>
            <SvgIcon icon={icons.dagger} onClick={handleCloseChat} />
          </StyledChatHeader>
          <StyledMessageContainer ref={messagesContainerRef}>
            {messages.map((message) => {
              return (
                <ChatMessage key={message.id} message={message.message} isUser={message.isUser} avatar={user?.avatar} />
              );
            })}
            {isTyping && (
              <StyledBotTyping>
                <StyledBotTypingDote />
                <StyledBotTypingDote />
                <StyledBotTypingDote />
              </StyledBotTyping>
            )}
          </StyledMessageContainer>
          <StyledFooter>
            <StyledInput
              placeholder="Введіть своє питання"
              value={userMessage}
              onChange={handleChangeText}
              onKeyDown={handleKeyDown}
            />
            <StyledSendButton $disabled={isTyping} disabled={isTyping} onClick={handleSend}>
              <SvgIcon icon={icons.sendMessage} />
            </StyledSendButton>
          </StyledFooter>
        </StyledChatWindow>
        {!isOpenChat && (
          <StyledAIChat onClick={handleOpenChat}>
            <SvgIcon icon={icons.chat} />
          </StyledAIChat>
        )}
      </StyledAIChatContainer>
    </ContainerUI>
  );
};
