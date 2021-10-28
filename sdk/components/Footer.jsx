import { Grid, IconButton } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import styles from '../../styles/footer.module.scss'
import MapRoundedIcon from '@mui/icons-material/MapRounded'
import ContactPhoneIcon from '@mui/icons-material/ContactPhone'
import SendIcon from '@mui/icons-material/Send'
const Footer = () => {
	return (
		<footer className={styles.footerContainer}>
			<Box className={styles.contentContainer}>
				<Grid container spacing={3}>
					<Grid item md={4}>
						<div className={styles.brandBox}>
							<div className={styles.logo}>
								<img src='/assets/icons/logo.svg' alt='' />
							</div>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Dignissimos consequuntur at asperiores!
							</p>
							<h2>Follow Us at!</h2>
							<div className={styles.socialLinks}>
								<a href=''>
									<img src='/assets/icons/instagram.svg' alt='instagram link' />
								</a>
								<a href=''>
									<img src='/assets/icons/whatsapp.svg' alt='whatsapp link' />
								</a>

								<a href=''>
									<img src='/assets/icons/skype.svg' alt='skype link' />
								</a>
							</div>
						</div>
					</Grid>
					<Grid container item md={8} spacing={3}>
						<Grid container item md={12} spacing={3}>
							<Grid item md={6}>
								<div className={styles.contactBox}>
									<MapRoundedIcon />
									<span>
										<span>Noida, India</span>
										<span>N 39, Sector 12</span>
									</span>
								</div>
							</Grid>
							<Grid item md={6}>
								<div className={styles.contactBox}>
									<ContactPhoneIcon />
									<span>
										<span>Call Us</span>
										<span>+919717456868</span>
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
								<p>Lorem ipsum dolor sit amet consectetur, maiores?</p>
								<div>
									<input type='text' />
									<IconButton>
										<SendIcon />
									</IconButton>
								</div>
							</Grid>
						</Grid>
					</Grid>
				</Grid>
			</Box>
			<Box className={styles.copyRightContainer}></Box>
		</footer>
	)
}

export default Footer
