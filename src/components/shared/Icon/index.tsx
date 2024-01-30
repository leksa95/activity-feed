import React from 'react';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import PhoneRoundedIcon from '@mui/icons-material/PhoneRounded';
import FreeBreakfastIcon from '@mui/icons-material/FreeBreakfast';
import LocalBarRoundedIcon from '@mui/icons-material/LocalBarRounded';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import { EVENT_TYPES_ENUM } from '@constants/index';
import { ControlButton } from './styles';

interface IconProps {
  type: EVENT_TYPES_ENUM;
  isActive?: boolean;
  onClick?: () => void;
}

const eventButtonTypes = {
  [EVENT_TYPES_ENUM.MESSAGE]: <ChatBubbleIcon />,
  [EVENT_TYPES_ENUM.PHONE]: <PhoneRoundedIcon />,
  [EVENT_TYPES_ENUM.COFFEE]: <FreeBreakfastIcon />,
  [EVENT_TYPES_ENUM.BEER]: <LocalBarRoundedIcon />,
  [EVENT_TYPES_ENUM.MEETING_NOTE]: <PersonRoundedIcon />,
};

const Icon = ({ type, isActive, onClick }: IconProps) => {
  return (
    <ControlButton className={isActive ? 'active' : ''} onClick={onClick}>
      {eventButtonTypes[type]}
    </ControlButton>
  );
};

export default Icon;
