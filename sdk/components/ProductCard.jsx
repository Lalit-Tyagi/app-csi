import { IconButton } from '@mui/material'
import styles from '../../styles/ProductCard.module.scss'
import ShareIcon from '@mui/icons-material/Share'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import FavoriteIcon from '@mui/icons-material/Favorite'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart'
const ProductCard = () => {
  return (
    <div className={styles.productCard}>
      <div
        className={styles.cardImage}
        style={{ backgroundImage: `url('/assets/images/p.jpg')` }}
      >
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
            <h2>somthing</h2>
            <h3>33$</h3>
          </div>
          <h4>description</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis
            laborum, possimus accusantium corporis error eius.
          </p>
        </div>
      </div>
    </div>
  )
}
export default ProductCard
