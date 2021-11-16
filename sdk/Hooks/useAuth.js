import { useRouter } from 'next/dist/client/router'
import { createContext, useCallback, useContext, useEffect, useMemo, useReducer } from 'react'
import { useAxios } from './useAxios'

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
	const axios = useAxios()

	//load token
	useEffect(() => {
		const token = localStorage.getItem('token')
		dispatch({ token })
	}, [])

	const login = useCallback(
		async (email, password) => {
			const { data, status } = await axios.post('/api/login', {
				email,
				password,
			})
			if (status === 200) {
				localStorage.setItem('token', data.token)
				dispatch({ token: data.token })
			}
		},
		[axios]
	)

	const logout = useCallback(() => {
		window?.localStorage.clear()
		dispatch(initialState)
	}, [])

	//write any function which need global access

	const providerValue = useMemo(
		() => ({
			...state,
			login,
			logout,
		}),
		[state, login, logout]
	)

	return <Provider value={providerValue}>{children}</Provider>
}
export const useAuth = () => useContext(AuthContext)
export { AuthProvider, Consumer as AuthConsumer, AuthContext }
