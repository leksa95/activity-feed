import React from 'react';
import { Box, Typography } from '@mui/material';
import { EVENT_TYPES_ENUM } from '@constants/index';

const generateActivityLabel = ({
  userName = 'Milton Romaguera',
  type,
}: {
  userName?: string;
  type: EVENT_TYPES_ENUM;
}) => {
  const variations = {
    [EVENT_TYPES_ENUM.MESSAGE]: 'had a chat with',
    [EVENT_TYPES_ENUM.PHONE]: 'had a call with',
    [EVENT_TYPES_ENUM.COFFEE]: 'had a coffee with',
    [EVENT_TYPES_ENUM.BEER]: 'had a party with',
    [EVENT_TYPES_ENUM.MEETING_NOTE]: 'added a note to',
  };

  return (
    <Box display={'flex'} alignItems={'center'} justifyContent={'flex-start'}>
      <Typography mr={0.5} textAlign={'left'} variant={'subtitle2'}>
        <span style={{ color: '#00bcd4' }}>
          <b>You</b>
        </span>{' '}
        {variations[type]}{' '}
        <span style={{ color: '#00bcd4' }}>
          <b>{userName}</b>
        </span>
      </Typography>
    </Box>
  );
};
export default generateActivityLabel;
