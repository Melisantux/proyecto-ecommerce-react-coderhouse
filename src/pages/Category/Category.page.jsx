import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { collection, query, where, getDocs, getFirestore } from 'firebase/firestore';

import { CategoryNavBar } from '../../components/CategoryNavBar/CategoryNavBar.component';
import { ProductList } from '../../components/ProductList/ProductList.component';
import { Loading } from '../../components/Loading/Loading.component';

import styles from './Category.module.css';

export const Category = () => {
  const { category } = useParams();

  const [productList, setProductList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    const db = getFirestore();

    const productCollection = collection(db, 'products');

    const productQuery = query(productCollection, where('category', '==', category));

    getDocs(productQuery)
      .then((snapshot) => {
        setProductList(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
      })
      .catch((error) => console(error))
      .finally(() => setLoading(false));
  }, [category]);

  return (
    <main>
      <h1 className={`${styles['title']} press-start-font`}>Welcome to Poke Collector!</h1>
      <CategoryNavBar />
      {loading ? <Loading /> : <ProductList productsList={productList} />}
    </main>
  );
};
