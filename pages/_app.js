import { createTheme, ThemeProvider } from '@mui/material/styles'
import { AuthProvider } from '../sdk/Hooks/useAuth'
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
			<AuthProvider>
				<Component {...pageProps} />
			</AuthProvider>
		</ThemeProvider>
	)
}

export default MyApp
