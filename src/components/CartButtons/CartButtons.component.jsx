import { useEffect, useState } from 'react';

import { useCart } from '../../hooks/useCart';

import styles from './CartButtons.module.css';

export const CartButtons = ({ product }) => {
  const { cart, addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  const [productInCart, setProductInCart] = useState(null);

  const handleAdd = () => {
    setQuantity(
      productInCart
        ? Math.min(product.stock - productInCart.quantity, productInCart.quantity + quantity)
        : Math.min(product.stock, quantity + 1),
    );
  };

  const handleSubstract = () => {
    setQuantity(Math.max(1, quantity - 1));
  };

  const handleAddToCart = () => {
    addToCart(product, quantity);
    setQuantity(1);
  };

  useEffect(() => {
    const productInCart = cart.find((productCart) => productCart.id === product.id);

    if (productInCart) {
      setProductInCart(productInCart);
    }
  }, [cart]);

  return (
    <div className={styles['add-to-cart-container']}>
      {product.stock - productInCart?.quantity === 0 ? null : (
        <div className={styles['quantity-btn-container']}>
          <button className={`${styles['count-btn']} nes-btn`} onClick={handleSubstract}>
            -
          </button>

          <p className={styles['count-container']}>{quantity}</p>

          <button className={`${styles['count-btn']} nes-btn`} onClick={handleAdd}>
            +
          </button>
        </div>
      )}

      {product.stock - productInCart?.quantity === 0 ? (
        <button className={styles['out-of-stock-btn']} disabled>
          <a className='nes-btn press-start-font' href='#'>
            Out of Stock
          </a>
        </button>
      ) : (
        <button
          className={`${styles['add-to-cart-btn']} nes-btn press-start-font`}
          onClick={handleAddToCart}
        >
          Add to Cart
        </button>
      )}
    </div>
  );
};
