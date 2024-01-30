import React, { useState } from 'react';
import { Box, Button, ButtonGroup } from '@mui/material';
import { EVENT_TYPES_ENUM } from '@constants/index';
import Icon from '@components/shared/Icon';
import { StepContainer, TextInput } from '../../styles';

interface CreateActivityProps {
  handleCreateActivity: (
    inputValue: string,
    eventType: EVENT_TYPES_ENUM,
  ) => void;
}

const CreateActivity = ({ handleCreateActivity }: CreateActivityProps) => {
  const [inputValue, setInputValue] = useState<string>('');
  const [eventType, setEventType] = useState(EVENT_TYPES_ENUM.MESSAGE);

  return (
    <StepContainer>
      <TextInput
        id="outlined-basic"
        color={'secondary'}
        value={inputValue}
        fullWidth
        placeholder={'Add a note about Milton Romaguera...'}
        onChange={(e) => setInputValue(e.target.value)}
      />

      <ButtonGroup
        sx={{ width: '100%' }}
        size="small"
        aria-label="small button group"
      >
        {Object.values(EVENT_TYPES_ENUM).map((type) => (
          <Icon
            key={type}
            type={type}
            isActive={eventType === type}
            onClick={() => setEventType(type)}
          />
        ))}
      </ButtonGroup>

      <Box sx={{ width: '100%', textAlign: 'right' }}>
        <Button
          variant="contained"
          color={'secondary'}
          onClick={() => {
            handleCreateActivity(inputValue, eventType);
            setInputValue('');
          }}
        >
          Submit
        </Button>
      </Box>
    </StepContainer>
  );
};

export default CreateActivity;
