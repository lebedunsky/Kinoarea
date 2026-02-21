import styled from "styled-components";

import { colors } from "@/shared/constants/style";
import { mapDeviceToMedia } from "@/shared/utils/map-device-to-media";

export const StyledMessage = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  ${mapDeviceToMedia.laptopOnly} {
    gap: 10px;
  }

  ${mapDeviceToMedia.tabletOnly} {
    gap: 10px;
  }

  ${mapDeviceToMedia.mobileOnly} {
    gap: 10px;
  }
`;

export const StyledBotImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 45px;
  height: 45px;
  background: ${colors.blue500};
  padding: 5px;
  border-radius: 100%;

  ${mapDeviceToMedia.laptopOnly} {
    width: 40px;
    height: 40px;
  }

  ${mapDeviceToMedia.tabletOnly} {
    width: 40px;
    height: 40px;
  }

  ${mapDeviceToMedia.mobileOnly} {
    width: 40px;
    height: 40px;
  }
`;

export const StyledMessageText = styled.p`
  background: ${colors.grey400};
  color: ${colors.white50};
  padding: 15px;
  border-radius: 15px;
  font-size: 18px;
  max-width: 300px;

  ${mapDeviceToMedia.laptopOnly} {
    padding: 5px;
    font-size: 16px;
    max-width: 200px;
  }

  ${mapDeviceToMedia.tabletOnly} {
    padding: 5px;
    font-size: 16px;
    max-width: 200px;
  }

  ${mapDeviceToMedia.mobileOnly} {
    padding: 5px;
    font-size: 16px;
    max-width: 200px;
  }
`;

export const StyledUserImage = styled.img`
  width: 45px;
  height: 45px;
  border-radius: 50%;

  ${mapDeviceToMedia.laptopOnly} {
    width: 40px;
    height: 40px;
  }

  ${mapDeviceToMedia.tabletOnly} {
    width: 40px;
    height: 40px;
  }

  ${mapDeviceToMedia.mobileOnly} {
    width: 40px;
    height: 40px;
  }
`;
