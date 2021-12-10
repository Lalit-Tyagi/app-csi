import { Button, Dialog, IconButton } from '@mui/material'
import { useRouter } from 'next/dist/client/router'

import ShareIcon from '@mui/icons-material/Share'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import FavoriteIcon from '@mui/icons-material/Favorite'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart'
import styles from '../../styles/product.module.scss'
import { useEffect, useMemo, useState } from 'react'

const ProductModal = ({ product = null, open, onClose }) => {
    const router = useRouter()
    const [mainImage, setMainImage] = useState()
    useEffect(() => {
        setMainImage(product.images[0])
    }, [product])
    return (
        <Dialog fullScreen className={styles.modal} open={open} onClose={onClose}>
            <div className={styles.mainContainer}>
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
                        <Button
                            variant="contained"
                            onClick={() => {
                                router.push(`/collection/product/${product.id}`)
                            }}
                        >
                            view Details
                        </Button>
                    </div>
                </div>
            </div>
        </Dialog>
    )
}
export default ProductModal
