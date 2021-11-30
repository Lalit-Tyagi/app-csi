import { IconButton } from '@mui/material'
import styles from '../../styles/ProductCard.module.scss'
import ShareIcon from '@mui/icons-material/Share'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import FavoriteIcon from '@mui/icons-material/Favorite'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart'
import { useMemo } from 'react'
const ProductCard = ({ product }) => {
	const mainImage = useMemo(() => {
		return product.images.find((item) => {
			return item.type === 'pri'
		})
	}, [product])

	console.log(mainImage)
	return (
		<div className={styles.productCard}>
			<div className={styles.cardImage} style={{ backgroundImage: `url('${mainImage?.url}` }}>
				<div>
					<button>Quick View</button>
				</div>
			</div>
			<div className={styles.cardBody}>
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
						<h2>{product.title}</h2>
						<h3>33$</h3>
					</div>
					<h4>description</h4>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis laborum, possimus
						accusantium corporis error eius.
					</p>
				</div>
			</div>
		</div>
	)
}
export default ProductCard
