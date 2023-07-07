import { useEffect, useState } from 'react';
import { collection, getDocs, getFirestore } from 'firebase/firestore';

import { CategoryNavBar } from '../../components/CategoryNavBar/CategoryNavBar.component';
import { ProductList } from '../../components/ProductList/ProductList.component';
import { Loading } from '../../components/Loading/Loading.component';

import styles from './Home.module.css';

export const Home = () => {
  const [productsList, setProductsList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const db = getFirestore();

    const productCollection = collection(db, 'products');

    getDocs(productCollection)
      .then((snapshot) => {
        setProductsList(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
      })
      .catch((error) => console(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <main className={styles.content}>
      <h1 className={`${styles.title} press-start-font`}>Welcome to Poke Collector!</h1>
      <CategoryNavBar />
      {loading ? <Loading /> : <ProductList productsList={productsList} />}
    </main>
  );
};
