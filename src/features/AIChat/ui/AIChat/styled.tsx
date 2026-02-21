import styled, { keyframes } from "styled-components";

import { colors } from "@/shared/constants/style";
import { mapDeviceToMedia } from "@/shared/utils/map-device-to-media";

export const StyledAIChat = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${colors.blue700};
  border-radius: 100%;
  width: 70px;
  height: 70px;
  padding: 10px;
  cursor: pointer;
  border: 1px solid ${colors.white50};

  &:hover {
    opacity: 0.9;
  }

  ${mapDeviceToMedia.laptopOnly} {
    width: 50px;
    height: 50px;
  }

  ${mapDeviceToMedia.tabletOnly} {
    width: 50px;
    height: 50px;
  }

  ${mapDeviceToMedia.mobileOnly} {
    width: 50px;
    height: 50px;
  }
`;

export const StyledAIChatContainer = styled.div<{ $isShown: boolean; $isOpenChat: boolean }>`
  position: fixed;
  bottom: 5%;
  right: ${(props) => (props.$isOpenChat ? "3" : props.$isShown ? "-20" : "-30")}%;
  z-index: 100;
  transition: all 0.3s ease;

  ${mapDeviceToMedia.laptopOnly} {
    bottom: 5%;
    right: ${(props) => (props.$isOpenChat ? "10" : props.$isShown ? "-20" : "-40")}%;
  }

  ${mapDeviceToMedia.tabletOnly} {
    bottom: 5%;
    right: ${(props) => (props.$isOpenChat ? "10" : props.$isShown ? "-20" : "-40")}%;
  }

  ${mapDeviceToMedia.mobileOnly} {
    bottom: 5%;
    right: ${(props) => (props.$isOpenChat ? "10" : props.$isShown ? "-50" : "-75")}%;
  }
`;

export const StyledChatWindow = styled.div<{ $isOpenChat: boolean }>`
  position: relative;
  width: 400px;
  height: 600px;
  background: ${colors.white50};
  border-radius: 10px;
  transition: all 0.3s ease;
  opacity: ${(props) => (props.$isOpenChat ? "1" : "0")};
  transform: ${(props) => (props.$isOpenChat ? "translateY(0)" : "translateX(20px)")};

  ${mapDeviceToMedia.laptopOnly} {
    width: 300px;
    height: 450px;
  }

  ${mapDeviceToMedia.tabletOnly} {
    width: 300px;
    height: 450px;
  }

  ${mapDeviceToMedia.mobileOnly} {
    width: 300px;
    height: 450px;
  }
`;

export const StyledChatHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 48px;
  padding: 10px;
  background: ${colors.blue500};
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;

  ${mapDeviceToMedia.laptopOnly} {
    height: 40px;
  }

  ${mapDeviceToMedia.tabletOnly} {
    height: 40px;
  }

  ${mapDeviceToMedia.mobileOnly} {
    height: 40px;
  }
`;

export const StyledTitle = styled.h3`
  color: ${colors.white50};
  font-size: 20px;

  ${mapDeviceToMedia.laptopOnly} {
    font-size: 18px;
  }

  ${mapDeviceToMedia.tabletOnly} {
    font-size: 18px;
  }

  ${mapDeviceToMedia.mobileOnly} {
    font-size: 18px;
  }
`;

export const StyledMessageContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  height: 480px;
  padding: 10px;
  overflow: scroll;

  ${mapDeviceToMedia.laptopOnly} {
    height: 350px;
  }

  ${mapDeviceToMedia.tabletOnly} {
    height: 350px;
  }

  ${mapDeviceToMedia.mobileOnly} {
    height: 350px;
  }
`;

export const StyledFooter = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 60px;
  padding: 10px;
  border-top: 1px solid ${colors.grey400};

  ${mapDeviceToMedia.laptopOnly} {
    height: 50px;
    gap: 10px;
  }

  ${mapDeviceToMedia.tabletOnly} {
    height: 50px;
    gap: 10px;
  }

  ${mapDeviceToMedia.mobileOnly} {
    height: 50px;
    gap: 10px;
  }
`;

export const StyledSendButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  background: ${colors.blue500};
  border: none;
  border-radius: 100%;
  padding: 10px;
  cursor: pointer;

  ${mapDeviceToMedia.laptopOnly} {
    width: 35px;
    height: 35px;
    padding: 5px;
  }

  ${mapDeviceToMedia.tabletOnly} {
    width: 35px;
    height: 35px;
    padding: 5px;
  }

  ${mapDeviceToMedia.mobileOnly} {
    width: 35px;
    height: 35px;
    padding: 5px;
  }
`;

export const StyledInput = styled.input`
  height: 40px;
  width: 300px;
  border-radius: 15px;
  padding: 0 10px;

  ${mapDeviceToMedia.laptopOnly} {
    width: 100%;
    height: 35px;
  }

  ${mapDeviceToMedia.tabletOnly} {
    width: 100%;
    height: 35px;
  }

  ${mapDeviceToMedia.mobileOnly} {
    width: 100%;
    height: 35px;
  }
`;

const typingAnimation = keyframes`
  0% {
    opacity: 0.2;
    transform: translateY(0);
  }
  50% {
    opacity: 1;
    transform: translateY(-4px);
  }
  100% {
    opacity: 0.2;
    transform: translateY(0);
  }
`;

export const StyledBotTyping = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  background: ${colors.grey400};
  padding: 15px;
  border-radius: 15px;
  width: 70px;
`;

export const StyledBotTypingDote = styled.span`
  width: 10px;
  height: 10px;
  background: ${colors.white50};
  border-radius: 50%;

  animation: ${typingAnimation} 1.2s infinite ease-in-out;

  &:nth-child(2) {
    animation-delay: 0.2s;
  }

  &:nth-child(3) {
    animation-delay: 0.4s;
  }
`;
