import { createTheme, ThemeProvider } from '@mui/material/styles'
import '../styles/globals.scss'

const theme = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#393e46',
      contrastText: '#f7f7f7',
    },
    secondary: {
      main: '#f7f7f7',
      contrastText: '#393e46',
    },
  },
})

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
