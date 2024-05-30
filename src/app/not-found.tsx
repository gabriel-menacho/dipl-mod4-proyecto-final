import { Box, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";

export default function NotFound() {
    return (
        <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            height="100vh"
            flexDirection="column"
        >
            <Typography variant="h4" color="textPrimary">
                Pagina no encontrada
            </Typography>
            <Link href="/">
                <Typography variant="h6" color="secondary">
                    Regresar al inicio
                </Typography>
            </Link>
        </Box>
    );
}