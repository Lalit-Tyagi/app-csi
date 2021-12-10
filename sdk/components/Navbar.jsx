import { ArrowBack, Router } from '@mui/icons-material'
import { Divider, IconButton, ListItem, Menu, MenuItem, SwipeableDrawer } from '@mui/material'
import React, { useEffect, useRef, useState } from 'react'
import styles from '../../styles/navbar.module.scss'
import { SignInSignUpModal } from './SignInSignUpModal'
import MenuIcon from '@mui/icons-material/Menu'
import PersonIcon from '@mui/icons-material/Person'
import { useAuth } from '../Hooks/useAuth'
import { useRouter } from 'next/dist/client/router'

const navbarLinks = [
    { label: 'Apparel', link: `/collection/apparel?catId=1` },
    { label: 'Jewellery', link: `/collection/jewellery?catId=5` },
    { label: 'Handbag', link: `/collection/handbag?catId=2` },
    { label: 'Home', link: `/collection/home?catId=3` },
    { label: 'Accessories', link: `/collection/accessories?catId=4` },
]
const Navbar = () => {
    const menuIconRef = useRef(null)
    const [drawar, setDrawar] = useState(false)
    const [menu, setMenu] = useState(false)
    const { token, logout } = useAuth()
    const [openModal, setOpenModal] = useState({ type: '', open: false })
    const [subCategoryList, setSubCategoryList] = useState({})
    const toggleMenu = () => {
        setMenu(!menu)
    }
    useEffect(() => {
        setOpenModal({ type: 'signIn', open: !token })
        ;(async () => {
            const res = await fetch(`${process.env.BASE_URL}/api/sub-categories`).then((res) => setSubCategoryList(res))
        })()
    }, [token])
    const router = useRouter()
    return (
        <>
            <header className={styles.mainContainer}>
                <div className={styles.navbar}>
                    <IconButton
                        onClick={() => {
                            setDrawar(!drawar)
                        }}
                    >
                        <MenuIcon />
                    </IconButton>

                    <div
                        onClick={() => {
                            router.push('/home')
                        }}
                        className={styles.brandContainer}
                    >
                        <div className={styles.logo}>
                            <img src="/assets/icons/logo.svg" alt="" />
                        </div>
                        <span>Concepts </span>
                    </div>
                    <IconButton ref={menuIconRef} onClick={toggleMenu}>
                        <PersonIcon />
                    </IconButton>
                </div>
                <div className={styles.categoryBar}>
                    {navbarLinks.map((item) => {
                        return (
                            <a key={item.label} href={item.link}>
                                {item.label}
                            </a>
                        )
                    })}
                </div>
            </header>

            {openModal.open ? (
                <SignInSignUpModal
                    onClose={() => {
                        setOpenModal({ type: '', open: false })
                    }}
                    {...openModal}
                />
            ) : null}

            {token ? (
                <Menu
                    anchorEl={menuIconRef.current}
                    open={menu}
                    onClose={() => {
                        setMenu(false)
                    }}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'right',
                    }}
                >
                    <MenuItem onClick={toggleMenu}>Profile</MenuItem>
                    <MenuItem onClick={toggleMenu}>My account</MenuItem>
                    <MenuItem
                        onClick={() => {
                            logout()
                            toggleMenu()
                        }}
                    >
                        Logout
                    </MenuItem>
                </Menu>
            ) : (
                <Menu
                    anchorEl={menuIconRef.current}
                    open={menu}
                    onClose={() => {
                        setMenu(false)
                    }}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'right',
                    }}
                >
                    <MenuItem
                        onClick={() => {
                            toggleMenu()
                            setOpenModal({ type: 'signIn', open: true })
                        }}
                    >
                        Sign In
                    </MenuItem>
                    <MenuItem
                        onClick={() => {
                            toggleMenu()
                            setOpenModal({ type: 'signUp', open: true })
                        }}
                    >
                        Sign Up
                    </MenuItem>
                </Menu>
            )}

            <SwipeableDrawer
                open={drawar}
                onClose={() => {
                    setDrawar(false)
                }}
                onOpen={() => {
                    setDrawar(true)
                }}
            >
                <div className={styles.sideDrawarMenu}>
                    <ListItem
                        button
                        onClick={() => {
                            setDrawar(false)
                        }}
                    >
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
                        <img src="/assets/icons/instagram.svg" alt="" />
                        <img src="/assets/icons/skype.svg" alt="" />
                        <img src="/assets/icons/whatsapp.svg" alt="" />
                        <img src="/assets/icons/facebook.svg" alt="" />
                    </div>
                </div>
            </SwipeableDrawer>
        </>
    )
}

export default Navbar
