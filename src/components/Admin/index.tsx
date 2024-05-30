'use client'

import clsx from 'clsx'
import styles, { adminClasses } from './styles'
import { IAdminProps } from './types'
import { styled, Box } from '@mui/material'
import Table from '../Table'
import AddProductButton from '../AddProductButton'

const testId = 'admin'

const Admin = styled(Box)(styles.admin)

export default function ({ className, products = [] }: IAdminProps) {
  const classProps = clsx(className, adminClasses.root)

  return (
    <Admin className={classProps} data-testid={testId}>
      <AddProductButton />
      <Table data={products} editable />
    </Admin>
  )
}

export type { IAdminProps }
export { adminClasses }
export { testId as AdminTestId }
