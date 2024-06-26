'use client'

import clsx from 'clsx'
import styles, { confirmationDialogClasses } from './styles'
import { IConfirmationDialogProps } from './types'
import {
  styled,
  Box,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
} from '@mui/material'

const testId = 'confirmation-dialog'

const ConfirmationDialog = styled(Dialog)(styles.confirmationDialog)

export default function ({
  className,
  title,
  children,
  onClose,
  onConfirm,
  ...props
}: IConfirmationDialogProps) {
  const classProps = clsx(className, confirmationDialogClasses.root)

  return (
    <ConfirmationDialog className={classProps} data-testid={testId} {...props}>
      <DialogTitle id="alert-dialog-title">
        {title || 'Are you sure?'}
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          {children || "You can't undo this action."}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button data-testid="confirm-button" onClick={onConfirm} autoFocus>
          Confirm
        </Button>
      </DialogActions>
    </ConfirmationDialog>
  )
}

export type { IConfirmationDialogProps }
export { confirmationDialogClasses }
export { testId as ConfirmationDialogTestId }
