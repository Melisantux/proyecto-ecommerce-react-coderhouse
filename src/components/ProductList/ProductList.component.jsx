import { Product } from "../Product/Product.component";
import styles from "./ProductList.module.css";

/** @typedef {import('../../asyncMock').Product} Product */

export const ProductList = ({ productsList }) => {
  return (
    <section
      aria-labelledby="product-list"
      className={styles["card-container"]}
    >
      <h2 id="product-list" className="sr-only">
        Productos
      </h2>
      {productsList.map((product) => {
        return <Product key={product.id} product={product} />;
      })}
    </section>
  );
};
