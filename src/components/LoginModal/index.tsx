'use client'

import clsx from 'clsx'
import styles, { loginModalClasses } from './styles'
import { ILogin, ILoginModalProps } from './types'
import { Box, Button, LinearProgress, styled, Typography } from '@mui/material'
import Modal from '../Modal'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import Input from '../Input'
import { useRouter } from 'next/navigation'
import { hasCookie } from 'cookies-next'
import { login } from '@/app/(api)/api'

const testId = 'login-modal'

const LoginModal = styled(Modal)(styles.loginModal)

export default function ({ className, ...props }: ILoginModalProps) {
  const classProps = clsx(className, loginModalClasses.root)
  const [loading, setLoading] = useState<boolean>(false)
  const [errorMsg, setErrorMsg] = useState('')
  const router = useRouter()
  const { handleSubmit, control } = useForm<ILogin>({
    defaultValues: {
      email: '',
      password: '',
    },
  })

  const loginHandler = async (data: ILogin) => {
    setLoading(true)
    try {
      await login(data)
      setErrorMsg('')
      if (hasCookie('token')) {
        router.replace('/admin')
      }
    } catch (error) {
      setErrorMsg('Invalid email or password')
    } finally {
      setLoading(false)
    }
  }

  return (
    <LoginModal className={classProps} data-testid={testId} {...props}>
      <form onSubmit={handleSubmit(loginHandler)}>
        <Box
          display={'grid'}
          justifyContent={'center'}
          alignItems={'center'}
          sx={{ borderRadius: 12 }}
          gap={2}
        >
          <Typography align={'center'} sx={{ fontWeight: '600' }}>
            Login
          </Typography>
          <Input
            id={'email'}
            control={control}
            data-testid={'email-input'}
            name="email"
            label="Email"
            size={'medium'}
            labelVariant={'subtitle1'}
            disabled={loading}
            rules={{ required: 'This field is required' }}
          />
          <Input
            id={'password'}
            control={control}
            data-testid={'password-input'}
            name="password"
            label="Password"
            size={'medium'}
            labelVariant={'subtitle1'}
            type={'password'}
            disabled={loading}
            rules={{
              required: 'This field is required',
              minLength: {
                value: 3,
                message: 'Password must have at least 3 characters',
              },
            }}
          />
          {loading && (
            <Box sx={{ width: '100%' }}>
              <LinearProgress />
            </Box>
          )}
          {errorMsg && (
            <Typography
              data-testid={'error-msg'}
              color={'error'}
              align={'center'}
            >
              {errorMsg}
            </Typography>
          )}
          <Button
            type="submit"
            variant="contained"
            fullWidth
            disabled={loading}
            data-testid={'login-action-button'}
          >
            <Typography sx={{ fontWeight: '600' }}>Login</Typography>
          </Button>
        </Box>
      </form>
    </LoginModal>
  )
}

export type { ILoginModalProps }
export { loginModalClasses }
export { testId as LoginModalTestId }
