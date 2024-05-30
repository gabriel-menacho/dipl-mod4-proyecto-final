'use client'

import clsx from 'clsx'
import styles, { productModalClasses } from './styles'
import { IProductModalProps } from './types'
import { Box, Button, Typography, styled } from '@mui/material'
import Modal from '../Modal'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { IProduct } from '../Main/types'
import { createProduct, updateProduct } from '@/app/(api)/api'
import Input from '../Input'

const testId = 'product-modal'

const ProductModal = styled(Modal)(styles.productModal)

export default function ({
  className,
  data = {},
  onClose,
  ...props
}: IProductModalProps) {
  const classProps = clsx(className, productModalClasses.root)
  const [loading, setLoading] = useState<boolean>(false)
  const router = useRouter()
  const { handleSubmit, control } = useForm<IProduct>({
    defaultValues: data,
  })

  const createHandler = async (data: IProduct) => {
    setLoading(true)
    data.price = +data.price
    try {
      await createProduct(data)
      onClose && onClose({}, 'backdropClick')
      router.refresh()
    } catch (error) {
      alert('An error occurred. Please try again later.')
    } finally {
      setLoading(false)
    }
  }

  const updateHandler = async (data: IProduct) => {
    setLoading(true)
    data.price = +data.price
    try {
      await updateProduct(data.id, data)
      onClose && onClose({}, 'backdropClick')
      router.refresh()
    } catch (error) {
      alert('An error occurred. Please try again later.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <ProductModal
      className={classProps}
      data-testid={testId}
      onClose={onClose}
      {...props}
    >
      <form onSubmit={handleSubmit(data.id ? updateHandler : createHandler)}>
        <Box
          display={'grid'}
          justifyContent={'center'}
          alignItems={'center'}
          sx={{ borderRadius: 12 }}
          gap={2}
        >
          <Typography align={'center'} sx={{ fontWeight: '600' }}>
            {data.id ? 'Update' : 'Create'} Product
          </Typography>
          <Input
            id={'name'}
            control={control}
            name="name"
            label={'Name'}
            size={'medium'}
            labelVariant={'subtitle1'}
            disabled={loading}
            rules={{ required: 'This field is required' }}
          />
          <Input
            id={'price'}
            control={control}
            name="price"
            label={'Price'}
            type={'number'}
            size={'medium'}
            labelVariant={'subtitle1'}
            disabled={loading}
            rules={{ required: 'This field is required' }}
          />
          <Input
            id={'description'}
            control={control}
            name="description"
            label={'Description'}
            size={'medium'}
            labelVariant={'subtitle1'}
            disabled={loading}
            rules={{ required: 'This field is required' }}
            multiline
          />
          <Button
            type={'submit'}
            variant={'contained'}
            color={'primary'}
            disabled={loading}
          >
            {data.id ? 'Update' : 'Create'}
          </Button>
        </Box>
      </form>
    </ProductModal>
  )
}

export type { IProductModalProps }
export { productModalClasses }
export { testId as ProductModalTestId }
