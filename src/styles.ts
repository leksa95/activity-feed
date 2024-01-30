import { styled } from '@mui/material';
import { Box, InputBase } from '@mui/material';

export const MainContainer = styled(Box)(({ theme }) => ({
  maxWidth: 600,
  padding: theme.spacing(8),
}));

export const StepContainer = styled(Box)(({ theme }) => ({
  background: '#f7f7f7',
  borderRadius: 5,
  marginLeft: theme.spacing(3),
  padding: theme.spacing(2),
}));

export const TextInput = styled(InputBase)(({ theme }) => ({
  background: theme.palette.common.white,
  marginBottom: theme.spacing(2),
  '& input': {
    border: '1px solid rgba(0, 0, 0, 0.12)',
    padding: theme.spacing(2),
    borderRadius: 5,
  },
  '& input:focus': {
    borderColor: theme.palette.secondary.main,
  },
}));
