import { Theme } from "@mui/material";

const ns = 'footer';

export const footerClasses = {
  root: `${ns}__root`,
};

const styles = {
  footer: ({ theme }: { theme: Theme }) => ({
    gridArea: "footer",
    color: theme.palette.secondary.main,
    padding: theme.spacing(4),
    backgroundColor: theme.palette.background.paper,
  })
}

export default styles;
