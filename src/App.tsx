import React, { useState } from 'react';

import { v4 as uuid } from 'uuid';

import {
  Box,
  Stepper,
  Step,
  StepLabel,
  Button,
  Typography,
  ButtonGroup,
  IconButton,
  Tooltip,
  TextField,
  StepContent,
} from '@mui/material';

import DeleteIcon from '@mui/icons-material/Delete';
import FormatListBulletedRoundedIcon from '@mui/icons-material/FormatListBulletedRounded';
import EVENT_TYPES_ENUM from './constants/EVENT_TYPES_ENUM.enum';
import Icon from './components/Icon';
import calculateDate from './utils/calculateDate';
import generateActivityLabel from './utils/generateActivityLabel';

function App() {
  const [inputValue, setInputValue] = useState<string>('');
  const [eventType, setEventType] = useState(EVENT_TYPES_ENUM.MESSAGE);

  const [activities, setActivities] = useState<
    {
      id: string;
      label: React.ReactElement;
      description: string;
      type: EVENT_TYPES_ENUM;
      createdAt: Date;
    }[]
  >([]);

  const handleCreateActivity = () => {
    setActivities([
      ...activities,
      {
        id: uuid(),
        label: generateActivityLabel({ type: eventType }),
        description: inputValue,
        type: eventType,
        createdAt: new Date(),
      },
    ]);

    setInputValue('');
  };

  const handleRemoveActivity = (id: string) => () => {
    setActivities(activities.filter((activity) => activity.id !== id));
  };

  const containerStyles = {
    background: '#f7f7f7',
    borderRadius: '5px',
    ml: 3,
    p: 2,
  };

  return (
    <div className="App">
      <Box sx={{ maxWidth: 600 }} p={8}>
        <Stepper orientation="vertical">
          <Step key={'main'}>
            <StepLabel
              StepIconProps={{
                icon: <FormatListBulletedRoundedIcon color={'primary'} />,
              }}
            >
              Activity Feed
            </StepLabel>

            <StepContent>
              <Box sx={containerStyles}>
                <TextField
                  id="outlined-basic"
                  variant="outlined"
                  value={inputValue}
                  fullWidth
                  placeholder={'Add a note about Milton Romaguera...'}
                  onChange={(e) => setInputValue(e.target.value)}
                  sx={{ background: '#ffffff', mb: 2 }}
                />

                <ButtonGroup
                  sx={{ width: '100%' }}
                  size="small"
                  aria-label="small button group"
                >
                  {Object.values(EVENT_TYPES_ENUM).map((type) => (
                    <Tooltip key={type} title={'text'}>
                      <Icon
                        type={type}
                        isActive={eventType === type}
                        onClick={() => setEventType(type)}
                      />
                    </Tooltip>
                  ))}
                </ButtonGroup>

                <Box sx={{ width: '100%', textAlign: 'right' }}>
                  <Button variant="contained" onClick={handleCreateActivity}>
                    Submit
                  </Button>
                </Box>
              </Box>
            </StepContent>
          </Step>

          {activities?.map((activity) => (
            <Step key={activity.id} active sx={{ position: 'relative' }}>
              <Box
                sx={{
                  position: 'absolute',
                  left: '-8px',
                  top: '50%',
                  transform: 'translate(0, -50%)',
                }}
              >
                <Typography
                  variant="caption"
                  sx={{
                    position: 'absolute',
                    left: '-30px',
                    top: '10px',
                  }}
                >
                  {calculateDate(activity.createdAt)}
                </Typography>

                <Icon type={activity.type} />
              </Box>

              <StepContent>
                <Box
                  display={'flex'}
                  justifyContent={'space-between'}
                  sx={containerStyles}
                >
                  <Box>
                    {activity.label}
                    <Typography
                      variant="caption"
                      textAlign={'left'}
                      textTransform={'capitalize'}
                      sx={{ width: '100%', display: 'flex' }}
                    >
                      {activity.description}
                    </Typography>
                  </Box>

                  <Tooltip title="Delete">
                    <IconButton
                      onClick={handleRemoveActivity(activity.id)}
                      aria-label="delete"
                    >
                      <DeleteIcon />
                    </IconButton>
                  </Tooltip>
                </Box>
              </StepContent>
            </Step>
          ))}
        </Stepper>
      </Box>
    </div>
  );
}

export default App;
