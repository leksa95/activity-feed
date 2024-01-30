import { styled } from '@mui/material';
import IconButton from '@mui/material/IconButton';

export const ControlButton = styled(IconButton)(({ theme }) => ({
  border: '1px solid rgba(0, 0, 0, 0.12)',
  backgroundColor: theme.palette.common.white,
  margin: theme.spacing(0, 0.5),
  '&.active': {
    cursor: 'pointer',
    backgroundColor: theme.palette.primary.main,
    '& svg path': {
      fill: theme.palette.common.white,
    },
  },
  '&:hover': {
    cursor: 'pointer',
    backgroundColor: theme.palette.primary.light,
    '& svg path': {
      fill: theme.palette.common.white,
    },
  },
  '& svg': {
    width: 16,
    height: 16,
    '& path': {
      fill: 'rgba(0, 0, 0, 0.25)',
    },
  },
}));
