import * as React from 'react'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter'
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import theme from '@/theme'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Box } from '@mui/material'

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html style={{ height: '100%' }} lang="en">
      <body style={{ height: '100%' }}>
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          <ThemeProvider theme={theme}>
            {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
            <CssBaseline />
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: '1fr',
                gridTemplateRows: 'auto 1fr auto',
                gridTemplateAreas: `
                'header'
                'main'
                'footer'
               `,
                height: '100%',
              }}
            >
              {props.children}
              <Footer />
            </Box>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  )
}
