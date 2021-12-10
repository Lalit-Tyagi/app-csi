import { Button, IconButton } from '@mui/material'
import { useRouter } from 'next/dist/client/router'
import styles from '../../styles/ProductCard.module.scss'
import ShareIcon from '@mui/icons-material/Share'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import FavoriteIcon from '@mui/icons-material/Favorite'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart'
import { useMemo, useState } from 'react'
import ProductModal from '../dialog/productModal'
const ProductCard = ({ product = null }) => {
    const [modal, setModal] = useState(false)
    const router = useRouter()
    const mainImage = useMemo(() => {
        return product?.images.find((item) => {
            return item.type === 'pri'
        })
    }, [product])

    return (
        <div className={styles.productCard}>
            <ProductModal
                product={product}
                open={modal}
                onClose={() => {
                    setModal(false)
                }}
            />
            <div className={styles.cardImage} style={{ backgroundImage: `url('${mainImage?.url}')` }}>
                <div>
                    <button
                        onClick={() => {
                            setModal(!modal)
                        }}
                    >
                        Quick View
                    </button>
                </div>
            </div>
            <div
                onClick={() => {
                    router.push(`/collection/product/${product.id}`)
                }}
                className={styles.cardBody}
            >
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
                <div className={styles.productDetails}>
                    <div>
                        <h2>{product?.title}</h2>
                        <h3>33$</h3>
                    </div>
                    <h4>description</h4>
                    <p>{product?.description}</p>
                </div>

                <Button variant="contained">View Details</Button>
            </div>
        </div>
    )
}
export default ProductCard
