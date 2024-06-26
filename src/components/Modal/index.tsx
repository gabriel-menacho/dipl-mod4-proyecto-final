'use client'

import clsx from 'clsx'
import styles, { modalClasses } from './styles'
import { IModalProps } from './types'
import { styled, Box, Modal as MuiModal, IconButton } from '@mui/material'
import ClearIcon from '@mui/icons-material/Clear'

const testId = 'modal'

const Modal = styled(MuiModal)(styles.modal)

export default function ({
  className,
  children,
  onClose,
  ...props
}: IModalProps) {
  const classProps = clsx(className, modalClasses.root)

  return (
    <Modal
      className={classProps}
      data-testid={testId}
      onClose={onClose}
      {...props}
    >
      <Box className={modalClasses.container}>
        {onClose && (
          <Box className={modalClasses.header}>
            <IconButton
              data-testid="close-button"
              onClick={(e) => onClose(e, 'backdropClick')}
            >
              <ClearIcon />
            </IconButton>
          </Box>
        )}
        <Box className={modalClasses.body}>{children}</Box>
      </Box>
    </Modal>
  )
}

export type { IModalProps }
export { modalClasses }
export { testId as ModalTestId }
