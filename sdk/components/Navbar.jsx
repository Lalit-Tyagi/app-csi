import { ArrowBack } from '@mui/icons-material'
import MenuIcon from '@mui/icons-material/Menu'
import PersonIcon from '@mui/icons-material/Person'
import {
	Divider,
	IconButton,
	ListItem,
	Menu,
	MenuItem,
	SwipeableDrawer,
} from '@mui/material'
import React, { useMemo, useState } from 'react'
import styles from '../../styles/navbar.module.scss'
const Navbar = () => {
	const [drawar, setDrawar] = useState(false)
	const [menu, setMenu] = useState(false)

	const toggleMenu = () => {
		setMenu(!menu)
	}

	return (
		<>
			<header className={styles.mainContainer}>
				<div className={styles.navbar}>
					<IconButton
						onClick={() => {
							setDrawar(!drawar)
						}}>
						<MenuIcon />
					</IconButton>

					<div className={styles.brandContainer}>
						<div className={styles.logo}>
							<img src='/assets/icons/logo.svg' alt='' />
						</div>
						<span>Concepts </span>
					</div>
					<IconButton onClick={toggleMenu}>
						<PersonIcon />
					</IconButton>
				</div>
				<div className={styles.categoryBar}>
					<a href='hello'>Apparel</a>
					<a href='#'>Jewellery</a>
					<a href='#'>Handbag</a>
					<a href='#'>Home</a>
					<a href='#'>Accessories</a>
				</div>
			</header>

			<Menu
				anchorEl={menu}
				open={menu}
				onClose={() => {
					setMenu(false)
				}}
				anchorOrigin={{
					vertical: 'top',
					horizontal: 'right',
				}}>
				<MenuItem onClick={toggleMenu}>Profile</MenuItem>
				<MenuItem onClick={toggleMenu}>My account</MenuItem>
				<MenuItem onClick={toggleMenu}>Logout</MenuItem>
			</Menu>

			<SwipeableDrawer
				open={drawar}
				onClose={() => {
					setDrawar(false)
				}}
				onOpen={() => {
					setDrawar(true)
				}}>
				<div className={styles.sideDrawarMenu}>
					<ListItem
						button
						onClick={() => {
							setDrawar(false)
						}}>
						<ArrowBack />
					</ListItem>
					<Divider />

					<ListItem button>Home</ListItem>
					<ListItem button>Collection</ListItem>
					<ListItem button>About us</ListItem>
					<ListItem button>Contact Us</ListItem>
					<Divider />
					<ListItem>
						<p>Connect With Us</p>
					</ListItem>
					<Divider />
					<div className={styles.sideDrawarSocial}>
						<img src='/assets/icons/instagram.svg' alt='' />
						<img src='/assets/icons/skype.svg' alt='' />
						<img src='/assets/icons/whatsapp.svg' alt='' />
						<img src='/assets/icons/facebook.svg' alt='' />
					</div>
				</div>
			</SwipeableDrawer>
		</>
	)
}

export default Navbar