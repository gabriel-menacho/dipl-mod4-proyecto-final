import { Theme } from '@mui/material';

const ns = 'add-product-button';

export const addProductButtonClasses = {
  root: `${ns}__root`,
};

const styles = {
  addProductButton: ({ theme }: { theme: Theme }) => ({
    display: 'flex',
    justifyContent: 'flex-end',
    padding: theme.spacing(2),
    flexDirection: 'row' as const,
    alignItems: 'center',
  }),
};

export default styles;
