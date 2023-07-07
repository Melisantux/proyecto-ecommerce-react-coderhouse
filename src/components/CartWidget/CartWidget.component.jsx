import { useCart } from '../../hooks/useCart';

import styles from './CartWidget.module.css';

export const CartWidget = () => {
  const { itemsQuantity } = useCart();

  return (
    <div className={styles['container']}>
      <span className='material-symbols-outlined icon nes-pointer'>shopping_cart</span>
      <span className={styles['notification']}>{itemsQuantity}</span>
    </div>
  );
};
