import { doc, getDoc, getFirestore } from "firebase/firestore";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import styles from "./ProductDetail.module.css";
import { Loading } from "../../components/Loading/Loading.component";

/** @typedef {import('../../asyncMock').Product} Product */

export const ProductDetail = () => {
  const { id } = useParams();

  /** @type {[product: Product, setProduct: React.Dispatch<Product>]} */
  const [product, setProduct] = useState([]);
  const [count, setCount] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const db = getFirestore();

    const productDoc = doc(db, "products", id);
    getDoc(productDoc)
      .then((snapshot) => {
        setProduct({ id: snapshot.id, ...snapshot.data() });
      })
      .catch((error) => console(error))
      .then(() => setLoading(false));
  }, []);

  return (
    <div className={styles["container"]}>
      {loading ? (
        <Loading />
      ) : (
        <div>
          <section className={styles["product-section"]}>
            <div className={styles["product-img-container"]}>
              <img src={product.img} alt={product.name} />
            </div>
            <div className={styles["product-info-container"]}>
              <h1 className={styles["product-title"]}>{product.name}</h1>
              <p className={styles["product-manufacturer"]}>
                {product.manufacturer}
              </p>
              <p className={styles["product-price"]}>US${product.price}</p>
              <div className={styles["add-to-cart-container"]}>
                <button
                  onClick={() => setCount(count - 1)}
                  disabled={count === 1}
                  className={styles["count-btn"]}
                >
                  <a className="nes-btn" href="#">
                    -
                  </a>
                </button>

                <span className={styles["count-container"]}>{count}</span>

                <button
                  onClick={() => setCount(count + 1)}
                  disabled={count === product.stock}
                  className={styles["count-btn"]}
                >
                  <a className="nes-btn" href="#">
                    +
                  </a>
                </button>

                <button className={styles["add-to-cart-btn"]}>
                  <a className="nes-btn" href="#">
                    Add to Cart
                  </a>
                </button>
              </div>
            </div>
          </section>
          <section>
            <h2 className={styles["section-title"]}>Description</h2>
            <div className={styles["details-container"]}>
              <p>{product.description}</p>
            </div>
          </section>

          <section>
            <h2 className={styles["section-title"]}>Features</h2>
            <div className={styles["details-container"]}>
              <ul>
                {product.features.map((feature, index) => {
                  return <li key={index}>{feature}</li>;
                })}
              </ul>
            </div>
          </section>
        </div>
      )}
    </div>
  );
};
