import { icons, SvgIcon } from "@/shared/ui/SvgIcon";

import { StyledBotImage, StyledMessage, StyledMessageText, StyledUserImage } from "./styled";

type ChatMessagePropsType = {
  message: string;
  avatar?: string;
  isUser: boolean;
};

export const ChatMessage = ({ isUser, avatar, message }: ChatMessagePropsType) => {
  return (
    <StyledMessage>
      {isUser ? (
        <StyledUserImage src={avatar} alt="user avatar" />
      ) : (
        <StyledBotImage>
          <SvgIcon icon={icons.robot} />
        </StyledBotImage>
      )}
      <StyledMessageText>{message}</StyledMessageText>
    </StyledMessage>
  );
};
