import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { useCart } from '../../hooks/useCart';

import styles from './Product.module.css';

export const Product = ({ product }) => {
  const navigate = useNavigate();
  const { cart, addToCart } = useCart();
  const [productInCart, setProductInCart] = useState(null);

  useEffect(() => {
    const productInCart = cart.find((productCart) => productCart.id === product.id);

    if (productInCart) {
      setProductInCart(productInCart);
    }
  }, [cart]);

  return (
    <article className={`${styles['card']} nes-pointer`}>
      <div className={styles['card-content']} onClick={() => navigate(`/product/${product.id}`)}>
        <img alt={product.name} className={styles['card-image']} src={product.img} />
        {product.isOnSale && <span className={styles['sale']}>SALE</span>}
        <Link className={styles['card-title']} to={`/product/${product.id}`}>
          {product.name}
        </Link>
        <div className={styles['price-container']}>
          <p className={product.isOnSale ? styles['onSale'] : null}>US${product.price}</p>
          {product.isOnSale && <p className={styles['salePrice']}>US${product.salePrice}</p>}
        </div>
      </div>
      {product.stock - productInCart?.quantity === 0 ? (
        <button className={styles['out-of-stock-btn']}>Out of Stock</button>
      ) : (
        <button className={styles['btn-cart']} onClick={() => addToCart(product, 1)}>
          Add To Cart
        </button>
      )}
    </article>
  );
};
