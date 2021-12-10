import { Grid, IconButton } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import styles from '../../styles/footer.module.scss'
import MapRoundedIcon from '@mui/icons-material/MapRounded'
import ContactPhoneIcon from '@mui/icons-material/ContactPhone'
import SendIcon from '@mui/icons-material/Send'
import { useFormik } from 'formik'
const Footer = () => {
    const formik = useFormik({
        initialValues: { email: '' },
        validate: (values) => {
            const errors = {}
            if (values.email === '') {
                errors.email = 'Enter valid Email'
            }
            return errors
        },
        onSubmit: async (values) => {
            try {
                const res = await fetch(`${process.env.BASE_URL}/api/subscribe`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },

                    body: JSON.stringify(values),
                })
                console.log(res)
            } catch (error) {
                console.log(error)
            }
        },
    })
    return (
        <>
            <footer className={styles.footerContainer}>
                <Box className={styles.contentContainer}>
                    <Grid container spacing={3}>
                        <Grid item md={4}>
                            <div className={styles.brandBox}>
                                <div className={styles.logo}>
                                    <img src="/assets/icons/logo.svg" alt="" />
                                </div>
                                <p>
                                    A first-generation businessman is descending from a lineage of farmers. I
                                    couldn&#39;t be more proud of being born with this.
                                    <p>
                                        Honesty and hard workflows in my veins naturally and undoubtedly never
                                        forgetting my commitments. I&#39;m always stood up for any demanding task given
                                        a chance would prove it anytime.
                                    </p>
                                </p>
                                <h2>Follow Us at!</h2>
                                <div className={styles.socialLinks}>
                                    <a href="">
                                        <img src="/assets/icons/instagram.svg" alt="instagram link" />
                                    </a>
                                    <a href="">
                                        <img src="/assets/icons/whatsapp.svg" alt="whatsapp link" />
                                    </a>

                                    <a href="">
                                        <img src="/assets/icons/skype.svg" alt="skype link" />
                                    </a>
                                </div>
                            </div>
                        </Grid>
                        <Grid container item md={8} spacing={3}>
                            <Grid container item md={12} spacing={3}>
                                <Grid item xs={6}>
                                    <div className={styles.contactBox}>
                                        <MapRoundedIcon />
                                        <span>
                                            <span>Noida, India</span>
                                            <span>N 39, Sector 12</span>
                                        </span>
                                    </div>
                                </Grid>
                                <Grid item xs={6}>
                                    <div className={styles.contactBox}>
                                        <ContactPhoneIcon />
                                        <span>
                                            <span>Call Us</span>
                                            <span>+91-9717456868</span>
                                        </span>
                                    </div>
                                </Grid>
                            </Grid>
                            <Grid container item md={12}>
                                <Grid item md={6} className={styles.linkBox}>
                                    <h1>Useful Links</h1>
                                    <ul>
                                        <li>Apparels</li>
                                        <li>Accessories</li>
                                        <li>Jewellery</li>
                                        <li>Home decor</li>
                                        <li>HandBags</li>
                                        <li>View All</li>
                                        <li>Home</li>
                                        <li>About Us</li>
                                        <li>Contact US</li>
                                        <li>collection</li>
                                    </ul>
                                </Grid>
                                <Grid item md={6} className={styles.subscribeBox}>
                                    <h1>Subscribe</h1>
                                    <p>Get exclusive access when you sign up for our newsletter!</p>
                                    <form onSubmit={formik.handleSubmit}>
                                        <input
                                            className={formik.touched.email && formik.errors.email ? 'error' : ''}
                                            value={formik.values.email}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            name="email"
                                            type="email"
                                            placeholder="Enter valid Email"
                                        />
                                        <IconButton type="submit">
                                            <SendIcon />
                                        </IconButton>
                                    </form>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Box>
            </footer>
            <Box className={styles.copyRightContainer}>
                Copyright © 2006 - 2021 <span>Concepts Source Inc</span> <br />
                All Rights Reserved.
            </Box>
        </>
    )
}

export default Footer
