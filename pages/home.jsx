import { useRouter } from 'next/dist/client/router'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import Carousel from '../sdk/components/Carousel'
import Footer from '../sdk/components/Footer'
import Navbar from '../sdk/components/Navbar'
import ProductCard from '../sdk/components/ProductCard'
import styles from '../styles/home.module.scss'

const cateogryList = [
    {
        name: 'apparel',
        imgUrl: '/assets/images/apparel.jpg',
        link: '/collection/apparel?catId=1',
    },
    {
        name: 'accessories',
        imgUrl: '/assets/images/accessories.jpg',
        link: '/collection/accessories?catId=2',
    },
    {
        name: 'handbag',
        imgUrl: '/assets/images/handbag.jpg',
        link: '/collection/handbag?catId=3',
    },
    {
        name: 'home',
        imgUrl: '/assets/images/home.jpg',
        link: '/collection/home?catId=4',
    },
    {
        name: 'jewellery',
        imgUrl: '/assets/images/jewellery.jpg',
        link: '/collection/jewellery?catId=5',
    },
    {
        name: 'view-all',
        imgUrl: '/assets/images/view-all.jpg',
        link: '/collection/view-all',
    },
]

export default function Home() {
    const router = useRouter()
    const [popularProducts, setPopularProducts] = useState([])
    useEffect(() => {
        ;(async () => {
            const res = await fetch(`${process.env.BASE_URL}/api/collection/popular`).then((res) => res.json())
            setPopularProducts(res)
        })()
    }, [])

    return (
        <>
            <Head>
                <title>Concepts Source Inc</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar />
            <main>
                <div className={styles.carouselContainer}>
                    <Carousel />
                </div>

                <h1 className={styles.sectionHeading}>Collection</h1>
                <div className={styles.categoryContainer}>
                    {cateogryList.map((item, index) => {
                        return (
                            <button
                                key={index}
                                className={styles.cardBody}
                                onClick={() => {
                                    router.push(item.link)
                                }}
                            >
                                <img src={item.imgUrl} alt={item.name} />
                                <span>{item.name}</span>
                            </button>
                        )
                    })}
                </div>

                <h1 className={styles.sectionHeading}>Popular Poroducts</h1>
                <div className={styles.popularProductContainer}>
                    {popularProducts.map((item) => (
                        <ProductCard key={item.id} product={item} />
                    ))}
                </div>
            </main>
            <Footer />
        </>
    )
}
