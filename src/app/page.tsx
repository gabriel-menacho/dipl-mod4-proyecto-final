import * as React from 'react'
import Main from '@/components/Main'
import { Box, Container } from '@mui/material'
import Header from '@/components/Header'
import { getProducts } from './(api)/api'

export default async function PublicPage() {
  const products = await getProducts();
  return (
    <>
      <Header />
      <Box
        sx={{
          gridArea: 'main',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Container maxWidth="lg">
          <Main products={products} />
        </Container>
      </Box>
    </>
  )
}
