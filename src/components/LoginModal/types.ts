import { ModalProps } from '@mui/material'

export interface ILoginModalProps extends Omit<ModalProps, 'children'> {
  className?: string
}

export interface ILogin {
  email: string
  password: string
}
