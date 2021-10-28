import { useRouter } from 'next/dist/client/router'
import Head from 'next/head'
import Image from 'next/image'
import { useEffect } from 'react'
import Footer from '../sdk/components/Footer'
import Navbar from '../sdk/components/Navbar'

export default function Home() {

	const router = useRouter()
	useEffect(() => {
		router.push('/home')
	}, [router]);
	return (
			<>
			</>
	)
}
