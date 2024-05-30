'use client'

import clsx from 'clsx'
import styles, { addProductButtonClasses } from './styles'
import { IAddProductButtonProps } from './types'
import { styled, Box, IconButton } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import ProductModal from '../ProductModal'
import { useState } from 'react'

const testId = 'add-product-button'

const AddProductButton = styled(Box)(styles.addProductButton)

export default function (props: IAddProductButtonProps) {
  const classProps = clsx(props.className, addProductButtonClasses.root)
  const [productModalOpen, setProductModalOpen] = useState(false)

  return (
    <>
      <AddProductButton className={classProps} data-testid={testId}>
        <IconButton
          color="primary"
          aria-label="add product"
          onClick={() => setProductModalOpen(true)}
        >
          Add Product <AddIcon />
        </IconButton>
      </AddProductButton>
      {productModalOpen && (
        <ProductModal
          open={productModalOpen}
          onClose={() => setProductModalOpen(false)}
        />
      )}
    </>
  )
}

export type { IAddProductButtonProps }
export { addProductButtonClasses }
export { testId as AddProductButtonTestId }
