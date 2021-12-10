import { Button, IconButton } from '@mui/material'
import { useRouter } from 'next/dist/client/router'
import { useCallback, useEffect, useState } from 'react'
import Footer from '../../../sdk/components/Footer'
import Navbar from '../../../sdk/components/Navbar'
import { useAuth } from '../../../sdk/Hooks/useAuth'

import ShareIcon from '@mui/icons-material/Share'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import FavoriteIcon from '@mui/icons-material/Favorite'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart'
import styles from '../../../styles/product.module.scss'
import ProductCard from '../../../sdk/components/ProductCard'

const ProductView = () => {
    const router = useRouter()
    const { productId } = router.query
    const { authFetch } = useAuth()
    const [product, setProduct] = useState()
    const [mainImage, setMainImage] = useState()
    const [recent, setRecent] = useState([])
    useEffect(() => {
        if (productId !== undefined) {
            console.log(productId)
            ;(async () => {
                try {
                    const res = await authFetch(`/api/user/product/${productId}`)
                    setProduct(res.data)
                    setMainImage(res.data.images[0])
                    const { data } = await authFetch('/api/user/product/recent')
                    setRecent(data)
                } catch (error) {
                    console.log(error)
                }
            })()
        }
    }, [productId, authFetch])

    return (
        <>
            <Navbar />
            <main className={styles.mainContainer}>
                <div className={styles.productDetails}>
                    <div className={styles.imageContainer}>
                        <div
                            className={styles.mainImageContainer}
                            style={product ? { backgroundImage: `url(${mainImage?.url})` } : {}}
                        ></div>
                        {product?.images?.map((item) => {
                            return (
                                <div
                                    key={item.imageID}
                                    onClick={() => {
                                        setMainImage(item)
                                    }}
                                    className={`${styles.moreImageContainer}  ${
                                        item.imageID === mainImage?.imageID ? styles.selected : ''
                                    }`}
                                    style={{ backgroundImage: `url(${item.url})` }}
                                ></div>
                            )
                        })}
                    </div>
                    <div className={styles.productDetailContainer}>
                        <div className={styles.top}>
                            <div className={styles.header}>
                                <h1>{product?.title}</h1>
                                <h2>Style No : {product?.styleno} </h2>
                                <h3>
                                    {product?.category} - {product?.subcategory}
                                </h3>
                            </div>
                            <div className={styles.price}>
                                <h3>$&nbsp;{product?.price}</h3>
                                <h1>
                                    <FavoriteIcon />
                                    &nbsp; {product?.likes}
                                </h1>
                            </div>
                        </div>
                        <hr />
                        <div className={styles.bottom}>
                            <div className={styles.infoContainer}>
                                <h3>Description</h3>
                                <p>{product?.description}</p>
                            </div>
                            <div className={styles.iconContainer}>
                                <IconButton className={styles.share}>
                                    <ShareIcon />
                                </IconButton>
                                <IconButton className={styles.unliked || styles.liked}>
                                    {<FavoriteBorderIcon /> || <FavoriteIcon />}
                                </IconButton>
                                <IconButton className={styles.cart}>
                                    <AddShoppingCartIcon />
                                </IconButton>
                            </div>
                        </div>
                        <Button variant="contained">Add To Cart</Button>
                    </div>
                </div>
                <h1 className={styles.sectionHeading}>Recently Viewd</h1>

                <div className={styles.recentlyViewd}>
                    {recent.map((item) => {
                        return <ProductCard key={item.id} product={item} />
                    })}
                </div>
            </main>
            <Footer />
        </>
    )
}

export default ProductView
