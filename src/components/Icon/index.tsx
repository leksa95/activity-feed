import React from 'react';

import IconButton from '@mui/material/IconButton';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import PhoneRoundedIcon from '@mui/icons-material/PhoneRounded';
import FreeBreakfastIcon from '@mui/icons-material/FreeBreakfast';
import LocalBarRoundedIcon from '@mui/icons-material/LocalBarRounded';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';

import EVENT_TYPES_ENUM from '../../constants/EVENT_TYPES_ENUM.enum';

import './styles.css';

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

const buttonStyles = {
  border: '1px solid #bdbdbd',
  background: '#ffffff',
  mx: 0.5,
};

const Icon = ({ type, isActive, onClick }: IconProps) => {
  return (
    <IconButton
      className={'controlButton'}
      sx={buttonStyles}
      color={isActive ? 'primary' : 'default'}
      onClick={onClick}
    >
      {eventButtonTypes[type]}
    </IconButton>
  );
};

export default Icon;
