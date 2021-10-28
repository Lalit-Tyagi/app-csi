import React, { useEffect, useMemo } from 'react'
import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'
import styles from '../../styles/carousel.module.scss'
import { Button, IconButton } from '@mui/material'
import { ArrowBackIosSharp, ArrowForwardIosSharp } from '@mui/icons-material'

const Carousel = () => {
	const [sliderRef, slider] = useKeenSlider({
		initial: 0,
		slideChanged(s) {
			setCurrentSlide(s.details().relativeSlide)
		},
		loop: true,
	})
	const [currentSlide, setCurrentSlide] = React.useState(0)
	const slideData = useMemo(
		() => [
			{
				imgUrl: '/assets/images/slide-1.jpg',
				title: 'product 1 2 3 and 4',
				description: `It is a long established fact that a reader will be distracted by
							the readable content of a page when looking at its layout.`,
				link: '#',
			},
			{
				imgUrl: '/assets/images/slide-1.jpg',
				title: 'product 1 2 3 and 4',
				description: `It is a long established fact that a reader will be distracted by
							the readable content of a page when looking at its layout.`,
				link: '#',
			},
			{
				imgUrl: '/assets/images/slide-1.jpg',
				title: 'product 1 2 3 and 4',
				description: `It is a long established fact that a reader will be distracted by
							the readable content of a page when looking at its layout.`,
				link: '#',
			},
			{
				imgUrl: '/assets/images/slide-1.jpg',
				title: 'product 1 2 3 and 4',
				description: `It is a long established fact that a reader will be distracted by
							the readable content of a page when looking at its layout.`,
				link: '#',
			},
		],
		[]
	)
	return (
		<div className={styles.carousel}>
			<div className={`${styles.slides} keen-slider`} ref={sliderRef}>
				{slideData.map((item, idx) => (
					<div key={idx} className='keen-slider__slide'>
						<img src={item.imgUrl} alt='' />
						<div className={styles.slideContent}>
							<h1>{item.title}</h1>
							<p>{item.description}</p>
							<Button
								color='primary'
								variant='contained'
								onClick={() => {
									console.log('buttonCLicked')
								}}>
								view Collection
							</Button>
						</div>
					</div>
				))}
			</div>
			{slider && (
				<>
					<IconButton
						style={{ left: 0 }}
						onClick={(e) => e.stopPropagation() || slider.prev()}>
						<ArrowBackIosSharp />
					</IconButton>

					<div className={styles.dots}>
						{[...Array(slider.details().size).keys()].map((idx) => {
							return (
								<button
									key={idx}
									onClick={() => {
										slider.moveToSlideRelative(idx)
									}}
									className={currentSlide === idx ? styles.active : ''}
								/>
							)
						})}
					</div>

					<IconButton
						style={{ right: 0 }}
						onClick={(e) => e.stopPropagation() || slider.next()}>
						<ArrowForwardIosSharp />
					</IconButton>
				</>
			)}
		</div>
	)
}

export default Carousel
