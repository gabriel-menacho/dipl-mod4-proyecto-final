import { Theme, buttonClasses, buttonGroupClasses } from '@mui/material';

const ns = 'header-buttons';

export const headerButtonsClasses = {
  root: `${ns}__root`,
};

const styles = {
  headerButtons: ({ theme }: { theme: Theme }) => ({
    [`& .${buttonClasses.root}`]: {
      borderRadius: '5px',
      marginLeft: theme.spacing(1),
    },
  }),
};

export default styles;
