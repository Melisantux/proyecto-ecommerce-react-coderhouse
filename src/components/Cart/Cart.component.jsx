import { useCart } from '../../hooks/useCart';
import { Error } from '../../pages/Error/Error.page';

import styles from './Cart.module.css';

export const Cart = () => {
  const { cart, updateProduct, removeProduct, totalPrice, itemsQuantity } = useCart();
  const shipping = totalPrice > 100 ? 0 : 9.99;

  return (
    <section className={styles['cart-container']}>
      <h2 className={`${styles.title} press-start-font`}>Cart</h2>
      {cart.length === 0 ? (
        <Error
          firstErrorMessage={
            'Oops! It looks like your Pokemon adventure is missing a crucial element!'
          }
          secondErrorMessage={'It seems that your product cart is currently empty.'}
        />
      ) : (
        cart.map((product) => {
          return (
            <div className={styles['product-container']} key={product.id}>
              <div className={styles['img-container']}>
                <img alt={product.name} className={styles['product-img']} src={product.img} />
              </div>

              <p className={styles['product-name']}>{product.name}</p>
              <div className={styles['quantity-btn-container']}>
                <button
                  className={`${styles['count-btn']} nes-btn material-symbols-outlined`}
                  disabled={product.quantity === 1}
                  onClick={() => updateProduct(product.id, product.quantity - 1)}
                >
                  remove
                </button>

                <p className={styles['count-container']}>{product.quantity}</p>

                <button
                  className={`${styles['count-btn']} nes-btn material-symbols-outlined`}
                  disabled={product.quantity === product.stock}
                  onClick={() => updateProduct(product.id, product.quantity + 1)}
                >
                  add
                </button>
              </div>
              <p className={styles['product-price']}>
                US${(product.price * product.quantity).toFixed(2)}
              </p>
              <button
                className='nes-btn material-symbols-outlined'
                onClick={() => removeProduct(product.id)}
              >
                delete
              </button>
            </div>
          );
        })
      )}
      {cart.length !== 0 && (
        <div className={styles['total-container']}>
          <section className={styles['total-section']}>
            <h2 className={`${styles['summary-title']} press-start-font`}>Purchase summary</h2>
            <div className={styles['total']}>
              <p>Products ({itemsQuantity})</p>
              <p>US${totalPrice.toFixed(2)}</p>
            </div>
            <div className={styles['total']}>
              <p>Shipping</p>
              <p>{shipping}</p>
            </div>
            <div className={styles['total']}>
              <p>Total</p>
              <p>US${(totalPrice + shipping).toFixed(2)}</p>
            </div>
            <button className={`${styles['checkout-btn']} nes-btn press-start-font`}>
              Checkout
            </button>
          </section>
        </div>
      )}
    </section>
  );
};
