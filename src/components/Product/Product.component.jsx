import { Link, useNavigate } from 'react-router-dom';

import { useCart } from '../../hooks/useCart';

import styles from './Product.module.css';

export const Product = ({ product }) => {
  const navigate = useNavigate();
  const { addToCart } = useCart();

  return (
    <article className={`${styles['card']} nes-pointer`}>
      <div className={styles['card-content']} onClick={() => navigate(`/product/${product.id}`)}>
        <img alt={product.name} className={styles['card-image']} src={product.img} />
        <Link className={styles['card-title']} to={`/product/${product.id}`}>
          {product.name}
        </Link>
        <p>US${product.price}</p>
      </div>
      <button className={styles['btn-cart']} onClick={() => addToCart(product, 1)}>
        Add To Cart
      </button>
    </article>
  );
};
