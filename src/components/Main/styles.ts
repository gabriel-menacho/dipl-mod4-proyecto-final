import { Theme } from "@mui/material";

const ns = 'main';

export const mainClasses = {
  root: `${ns}__root`,
};

const styles = {
  main: ({ theme }: { theme: Theme }) => ({
    padding: theme.spacing(5),
  }),
};

export default styles;
