import { Product } from '../Product/Product.component';

import styles from './ProductList.module.css';

export const ProductList = ({ productsList }) => {
  return (
    <section aria-labelledby='product-list' className={styles['card-container']}>
      <h2 className='sr-only' id='product-list'>
        Productos
      </h2>
      {productsList.map((product) => {
        return <Product key={product.id} product={product} />;
      })}
    </section>
  );
};
