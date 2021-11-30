import { useRouter } from 'next/dist/client/router'
import { createContext, useCallback, useContext, useEffect, useMemo, useReducer } from 'react'

const simpleReducer = (state, payload) => ({
	...state,
	...payload,
})
const initialState = {
	user: null,
	token: null,
}
const AuthContext = createContext({
	...initialState,
	login: null,
	logout: null,
})
const { Provider, Consumer } = AuthContext
const AuthProvider = ({ children }) => {
	const [state, dispatch] = useReducer(simpleReducer, initialState)
	const router = useRouter()

	//load token
	useEffect(() => {
		const token = localStorage.getItem('token')
		dispatch({ token })
	}, [])

	const login = useCallback(async (email, password) => {
		const res = await fetch(`${process.env.BASE_URL}/api/login`, {
			method: 'post',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				email,
				password,
			}),
		})
		if (res.status === 200) {
			const { token } = await res.json()
			localStorage.setItem('token', token)
			dispatch({ token: token })
		}
	}, [])

	const logout = useCallback(() => {
		window?.localStorage.clear()
		dispatch(initialState)
	}, [])

	//write any function which need global access
	const authFetch = useCallback(
		async (url, options) => {
			const headers = {
				'Content-Type': 'application/json',
				apikey: state.token,
			}
			const res = await fetch(`${process.env.BASE_URL}${url}`, {
				...options,
				headers: { ...headers, ...options?.headers },
				body: JSON.stringify(options?.body),
			})

			return {
				status: res.status,
				data: await res.json(),
			}
		},
		[state.token]
	)

	const providerValue = useMemo(
		() => ({
			...state,
			login,
			logout,
			authFetch,
		}),
		[state, login, logout, authFetch]
	)

	return <Provider value={providerValue}>{children}</Provider>
}
export const useAuth = () => useContext(AuthContext)
export { AuthProvider, Consumer as AuthConsumer, AuthContext }
