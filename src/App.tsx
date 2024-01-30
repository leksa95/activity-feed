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
  StepContent,
  ThemeProvider,
} from '@mui/material';

import DeleteIcon from '@mui/icons-material/Delete';
import FormatListBulletedRoundedIcon from '@mui/icons-material/FormatListBulletedRounded';
import EVENT_TYPES_ENUM from './constants/EVENT_TYPES_ENUM.enum';
import Icon from './components/Icon';
import calculateDate from './utils/calculateDate';
import generateActivityLabel from './utils/generateActivityLabel';

import { MainContainer, StepContainer, TextInput } from './styles';
import theme from './theme';

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

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <MainContainer>
          <Stepper orientation="vertical">
            <Step key={'main'}>
              <StepLabel
                StepIconProps={{
                  icon: <FormatListBulletedRoundedIcon color={'primary'} />,
                }}
              >
                <Typography variant={'h6'} fontWeight={700}>
                  Activity Feed
                </Typography>
              </StepLabel>

              <StepContent>
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
                    <Button
                      variant="contained"
                      color={'secondary'}
                      onClick={handleCreateActivity}
                    >
                      Submit
                    </Button>
                  </Box>
                </StepContainer>
              </StepContent>
            </Step>

            {activities?.map((activity) => (
              <Step key={activity.id} active>
                <Box>
                  <Typography variant="caption" ml={-4}>
                    {calculateDate(activity.createdAt)}
                  </Typography>

                  <Icon type={activity.type} />
                </Box>

                <StepContent>
                  <StepContainer
                    mt={-5}
                    display={'flex'}
                    justifyContent={'space-between'}
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
                  </StepContainer>
                </StepContent>
              </Step>
            ))}
          </Stepper>
        </MainContainer>
      </ThemeProvider>
    </div>
  );
}

export default App;
