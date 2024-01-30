import React from 'react';
import {
  Box,
  IconButton,
  Step,
  StepContent,
  Tooltip,
  Typography,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import Icon from '@components/shared/Icon';
import calculateDate from '@utils/calculateDate';
import { EVENT_TYPES_ENUM } from '@constants/index';
import { StepContainer } from '../../styles';

export interface ActivityProps {
  id: string;
  label: React.ReactElement;
  description: string;
  type: EVENT_TYPES_ENUM;
  createdAt: Date;
}

interface ActivitiesProps {
  activity: ActivityProps;
  handleRemoveActivity: (id: string) => () => void;
}

const Activity = ({ activity, handleRemoveActivity }: ActivitiesProps) => {
  return (
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
  );
};

export default Activity;
