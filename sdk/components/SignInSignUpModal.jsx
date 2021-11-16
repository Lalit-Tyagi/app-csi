import { Close } from '@mui/icons-material'
import { Button, Dialog, IconButton, TextField } from '@mui/material'
import { useState } from 'react'
import styles from '../../styles/loginModal.module.scss'
import { useFormik } from 'formik'
import { useAxios } from '../Hooks/useAxios'
import { useAuth } from '../Hooks/useAuth'
export const SignInSignUpModal = ({
	type,
	open = false,
	onClose,
	...props
}) => {
	const [state, setState] = useState(type)
	const axios = useAxios()
	const { login } = useAuth()
	const signUpForm = useFormik({
		initialValues: {
			name: '',
			email: '',
			password: '',
			confirmPassword: '',
		},
		validate: ({ name, email, password, confirmPassword }) => {
			const errors = {}

			if (name === '') {
				errors.name = 'Enter Valid Name'
			}

			if (email === '') {
				errors.email = 'Enter Valid email'
			}
			if (password === '') {
				errors.password = 'Enter Valid passsword'
			}
			if (confirmPassword === '' || confirmPassword !== password) {
				errors.confirmPassword = 'both password should be same!'
			}
			return errors
		},
		onSubmit: async (values) => {
			const { data } = await axios('https://geolocation-db.com/json/')
			const res = await axios.post('/api/register', {
				...values,
				ip: data.IPv4,
				countryCode: data.country_code,
				countryName: data.country_name,
				state: data.state,
			})
			if (res.status === 200) {
				login(values.email, values.password)
				//todo handle redirect here
				onClose()
			} else {
				//todo show some error
			}
		},
	})

	const signInForm = useFormik({
		initialValues: {
			email: '',
			password: '',
		},
		validate: ({ email, password }) => {
			const errors = {}

			if (email === '') {
				errors.email = 'Enter Valid email'
			}
			if (password === '') {
				errors.password = 'Enter Valid passsword'
			}
			console.log(errors)
			return errors
		},
		onSubmit: async ({ email, password }) => {
			login(email, password)
			//todo handle redirect here
			onClose()
		},
	})

	const isError = (name, form) => {
		const touched = form.touched
		const errors = form.errors
		return touched[name] && errors[name] ? errors[name] : null
	}
	return (
		<Dialog open={open} fullScreen className={styles.modal} {...props}>
			<IconButton className={styles.closeBtn} onClick={onClose}>
				<Close />
			</IconButton>
			<div>
				<div className={styles.logo}>
					<img src="/assets/icons/logo.svg" alt="" />
				</div>
			</div>
			{state === 'signUp' && (
				<div className={styles.formContainer}>
					<h1>Sign Up</h1>

					<form onSubmit={signUpForm.handleSubmit}>
						<TextField
							error={!!isError('name', signUpForm)}
							onChange={signUpForm.handleChange}
							name="name"
							id="Name"
							label="Name*"
							type="text"
							variant="standard"
						/>
						<TextField
							error={!!isError('email', signUpForm)}
							onChange={signUpForm.handleChange}
							name="email"
							id="email"
							label="Email*"
							type="text"
							variant="standard"
						/>
						<TextField
							error={!!isError('password', signUpForm)}
							onChange={signUpForm.handleChange}
							id="password"
							name="password"
							label="Password*"
							type="text"
							variant="standard"
						/>
						<TextField
							error={!!isError('confirmPassword', signUpForm)}
							onChange={signUpForm.handleChange}
							id="confirmPassword"
							name="confirmPassword"
							label="Confirm Password*"
							type="text"
							variant="standard"
						/>
						<a
							onClick={() => {
								setState('signIn')
							}}>
							I am already a Member
						</a>
						<Button type="submit" variant="contained">
							Sign Up
						</Button>
					</form>
				</div>
			)}

			{state === 'signIn' && (
				<div className={styles.formContainer}>
					<h1>Sign In</h1>
					<form onSubmit={signInForm.handleSubmit}>
						<TextField
							onChange={signInForm.handleChange}
							name="email"
							id="email"
							label="Email*"
							type="text"
							variant="standard"
						/>
						<TextField
							onChange={signInForm.handleChange}
							name="password"
							id="password"
							label="Password*"
							type="text"
							variant="standard"
						/>
						<a
							onClick={() => {
								setState('signUp')
							}}>
							Create and Account
						</a>

						<Button type="submit" variant="contained">
							Sign In
						</Button>
					</form>
				</div>
			)}
		</Dialog>
	)
}
