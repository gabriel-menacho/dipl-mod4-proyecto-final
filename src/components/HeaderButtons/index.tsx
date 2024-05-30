'use client'

import clsx from 'clsx'
import styles, { headerButtonsClasses } from './styles'
import { IHeaderButtonsProps } from './types'
import { styled, Box, Button } from '@mui/material'
import LoginModal from '../LoginModal'
import { useState } from 'react'
import { deleteCookie } from 'cookies-next'

const testId = 'header-buttons'

const HeaderButtons = styled(Box)(styles.headerButtons)

export default function (props: IHeaderButtonsProps) {
  const [loginModalOpen, setLoginModalOpen] = useState(false)
  const classProps = clsx(props.className, headerButtonsClasses.root)

  const handleClose = () => {
    setLoginModalOpen(false)
  }

  const handleLogOut = () => {
    deleteCookie('token')
    window.location.reload()
  }

  return (
    <HeaderButtons className={classProps} data-testid={testId}>
      {props.loggedIn ? (
        <Button
          size="small"
          variant="contained"
          color="primary"
          onClick={handleLogOut}
        >
          Log Out
        </Button>
      ) : (
        <Button
          onClick={() => setLoginModalOpen(!loginModalOpen)}
          size="small"
          variant="contained"
          color="primary"
        >
          Log In
        </Button>
      )}
      <LoginModal open={loginModalOpen} onClose={handleClose} />
    </HeaderButtons>
  )
}

export type { IHeaderButtonsProps }
export { headerButtonsClasses }
export { testId as HeaderButtonsTestId }
