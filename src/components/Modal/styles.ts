import { Theme } from '@mui/material'

const ns = 'modal'

export const modalClasses = {
  body: `${ns}__body`,
  container: `${ns}__container`,
  header: `${ns}__header`,
  root: `${ns}__root`,
}

const styles = {
  modal: ({ theme }: { theme: Theme }) => ({
    [`& .${modalClasses.container}`]: {
      display: 'flex',
      flexDirection: 'column',
      minHeight: 400,
      backgroundColor: theme.palette.background.paper,
      borderRadius: '5px',
      boxShadow: theme.shadows[24],
      position: 'absolute' as 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      minWidth: 600,

      [`& .${modalClasses.header}`]: {
        display: 'flex',
        justifyContent: 'flex-end',
        borderBottom: '1px solid #ccc',

        [`& svg`]: {
          cursor: 'pointer',
        },
      },
      [`& .${modalClasses.body}`]: {
        padding: theme.spacing(2),
      },
    },
  }),
}

export default styles
