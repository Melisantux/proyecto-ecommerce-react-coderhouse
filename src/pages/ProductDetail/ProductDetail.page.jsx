import { doc, getDoc, getFirestore } from 'firebase/firestore';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

import { Loading } from '../../components/Loading/Loading.component';
import { CartButtons } from '../../components/CartButtons/CartButtons.component';

import styles from './ProductDetail.module.css';

export const ProductDetail = () => {
  const { slug } = useParams();

  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const db = getFirestore();

    const productDoc = doc(db, 'products', slug);

    getDoc(productDoc)
      .then((snapshot) => {
        setProduct({ id: snapshot.id, ...snapshot.data() });
      })
      .catch((error) => console(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className={styles['container']}>
      {loading ? (
        <Loading />
      ) : (
        <div>
          <section className={styles['product-section']}>
            <div className={styles['product-img-container']}>
              <img alt={product.name} src={product.img} />
            </div>
            <div className={styles['product-info-container']}>
              <h1 className={styles['product-title']}>{product.name}</h1>
              <p className={styles['product-manufacturer']}>{product.manufacturer}</p>
              <p className={styles['product-price']}>US${product.price}</p>
              <CartButtons key={product.id} product={product} />
            </div>
          </section>
          {!!product.description && (
            <section>
              <h2 className={styles['section-title']}>Description</h2>
              <div className={styles['details-container']}>
                <p>{product.description}</p>
              </div>
            </section>
          )}
          {!!product.features.length && (
            <section>
              <h2 className={styles['section-title']}>Features</h2>
              <div className={styles['details-container']}>
                <ul>
                  {product.features.map((feature, index) => {
                    return <li key={index}>{feature}</li>;
                  })}
                </ul>
              </div>
            </section>
          )}
        </div>
      )}
    </div>
  );
};
