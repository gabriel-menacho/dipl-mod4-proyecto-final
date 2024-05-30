import { Theme } from "@mui/material";

const ns = 'header';

export const headerClasses = {
  root: `${ns}__root`,
};

const styles = {
  header: ({ theme }: { theme: Theme }) => ({
    gridArea: 'header',
    borderBottom: '1px solid #000',
    display: 'flex',
    justifyContent: 'flex-end',
    padding: theme.spacing(2),
    flexDirection: 'row' as const,
    alignItems: 'center',
  }),
};

export default styles;
