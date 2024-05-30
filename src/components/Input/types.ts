import { InputHTMLAttributes } from "react"
import { Control, FieldValues, Path, RegisterOptions } from "react-hook-form"
import { InputProps as StandardInputProps } from '@mui/material/Input/Input'
import { InputBaseProps, OutlinedInputProps } from "@mui/material"
import { Variant } from "@mui/material/styles/createTypography"

export type IInputProps<T extends FieldValues> = {
  id: string
  className?: string
  name: Path<T>
  control: Control<T, object>
  label: string
  size?: 'small' | 'medium'
  type?: InputHTMLAttributes<unknown>['type']
  rules?: RegisterOptions
  disabled?: boolean
  onChange?: StandardInputProps['onChange']
  InputProps?: Partial<OutlinedInputProps>
  inputProps?: InputBaseProps['inputProps']
  onEnter?: () => void
  clearable?: boolean
  variant?: 'standard' | 'outlined' | 'filled'
  rows?: number
  multiline?: boolean
  bgcolor?: string
  labelVariant?: Variant
}
