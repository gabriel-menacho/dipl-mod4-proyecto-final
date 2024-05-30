import * as React from "react";
import { Box, Container } from "@mui/material";
import Admin from "@/components/Admin";
import Header from "@/components/Header";
import { getProducts } from "../(api)/api";

export default async function AdminPage() {
  const products = await getProducts();
  return (
    <>
      <Header loggedIn />
      <Box
        sx={{
          gridArea: 'main',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Container maxWidth="lg">
          <Admin products={products} />
        </Container>
      </Box>
    </>
  );
}
