import { Link, useNavigate } from "react-router-dom";
import styles from "./Product.module.css";

/** @param {{product: import("../../asyncMock").Product}} props  */
export const Product = ({ product }) => {
  const navigate = useNavigate();

  return (
    <article className={`${styles["card"]} nes-pointer`}>
      <div
        onClick={() => navigate(`/product/${product.id}`)}
        className={styles["card-content"]}
      >
        <img
          src={product.img}
          alt={product.name}
          className={styles["card-image"]}
        />
        <Link to={`/product/${product.id}`} className={styles["card-title"]}>
          {product.name}
        </Link>
        <p>US${product.price}</p>
      </div>
      <button className={styles["btn-cart"]}>Add To Cart</button>
    </article>
  );
};
