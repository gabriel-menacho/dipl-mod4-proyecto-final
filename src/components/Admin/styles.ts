import { Theme } from '@mui/material'

const ns = 'admin'

export const adminClasses = {
  root: `${ns}__root`,
}

const styles = {
  admin: ({ theme }: { theme: Theme }) => ({
    padding: theme.spacing(5),
  }),
}

export default styles
