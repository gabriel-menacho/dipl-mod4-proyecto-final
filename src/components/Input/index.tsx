'use client'

import clsx from 'clsx'
import styles, { inputClasses } from './styles'
import { IInputProps } from './types'
import {
  styled,
  Box,
  InputLabel,
  Typography,
  TextField,
  IconButton,
  InputAdornment,
  FormHelperText,
} from '@mui/material'
import { Controller, FieldValues, Path, PathValue } from 'react-hook-form'
import { useState } from 'react'
import VisibilityIcon from '@mui/icons-material/Visibility'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff'
import ClearIcon from '@mui/icons-material/Clear'

const testId = 'input'

const InputCmp = styled(Box)(styles.input)

export const Input = <T extends FieldValues>({
  id,
  className,
  name,
  control,
  label,
  size = 'small',
  type,
  rules,
  disabled,
  onChange,
  InputProps,
  inputProps,
  onEnter,
  clearable,
  variant,
  rows = 1,
  multiline = false,
  bgcolor,
  labelVariant = 'subtitle2',
}: IInputProps<T>) => {
  const classProps = clsx(className, inputClasses.root)
  const [showPassword, setShowPassword] = useState(false)
  const handleClickShowPassword = () => setShowPassword(!showPassword)

  return (
    <InputCmp className={classProps} data-testid={testId}>
      <InputLabel htmlFor={id}>
        <Typography
          variant={labelVariant}
          sx={{ color: 'text.primary', fontWeight: '500' }}
        >
          {label}
        </Typography>
      </InputLabel>
      <Controller
        name={name}
        control={control}
        render={({ field, fieldState: { error } }) => (
          <>
            <TextField
              id={id}
              name={name}
              variant={variant}
              sx={{
                width: '100%',
                bgcolor: bgcolor,
              }}
              size={size}
              error={!!error}
              rows={rows}
              multiline={multiline}
              type={showPassword ? 'text' : type}
              onChange={(event) => {
                if (onChange) {
                  onChange(event)
                }
                field.onChange(event)
              }}
              inputRef={field.ref}
              onKeyUp={(event) => {
                if (event.key === 'Enter' && !event.shiftKey) {
                  if (onEnter) {
                    onEnter()
                  }
                }
              }}
              value={field.value}
              disabled={disabled}
              inputProps={inputProps}
              InputProps={{
                endAdornment:
                  field.value && clearable ? (
                    <IconButton
                      size="small"
                      color={'primary'}
                      onClick={() => {
                        field.onChange('')
                      }}
                    >
                      <ClearIcon />
                    </IconButton>
                  ) : type === 'password' ? (
                    <InputAdornment position="end">
                      <IconButton
                        size="small"
                        onClick={handleClickShowPassword}
                      >
                        {showPassword ? (
                          <VisibilityIcon />
                        ) : (
                          <VisibilityOffIcon />
                        )}
                      </IconButton>
                    </InputAdornment>
                  ) : undefined,
                ...InputProps,
              }}
            />
            {!!error && <FormHelperText error>{error?.message}</FormHelperText>}
          </>
        )}
        defaultValue={'' as PathValue<T, Path<T>>}
        rules={rules}
      />
    </InputCmp>
  )
}

export type { IInputProps }
export { inputClasses }
export { testId as InputTestId }
export default Input
