import React from 'react';
import {
  Step,
  StepContent,
  StepLabel,
  Stepper,
  Typography,
} from '@mui/material';
import { MainContainer } from '../../styles';
import FormatListBulletedRoundedIcon from '@mui/icons-material/FormatListBulletedRounded';
import CreateActivity from '../CreateActivity';
import useActivities from '../../hooks/useActivities';
import Activity from '../Activity';

const Container = () => {
  const { activities, handleCreateActivity, handleRemoveActivity } =
    useActivities();

  return (
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
            <CreateActivity handleCreateActivity={handleCreateActivity} />
          </StepContent>
        </Step>

        {activities.map((activity) => (
          <Activity
            key={activity.id}
            activity={activity}
            handleRemoveActivity={handleRemoveActivity}
          />
        ))}
      </Stepper>
    </MainContainer>
  );
};

export default Container;
