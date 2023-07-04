import { CategoryNavBar } from "../../components/CategoryNavBar/CategoryNavBar.component";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import { ProductList } from "../../components/ProductList/ProductList.component";
import { useEffect, useState } from "react";
import styles from "./Home.module.css";
import { Loading } from "../../components/Loading/Loading.component";

/** @typedef {import('../../asyncMock').Product} Product */

export const Home = () => {
  /** @type {[productList: Product[], setProductsList: React.Dispatch<Product[]>]} */
  const [productsList, setProductsList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const db = getFirestore();

    const productCollection = collection(db, "products");
    getDocs(productCollection)
      .then((snapshot) => {
        setProductsList(
          snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
        );
      })
      .catch((error) => console(error))
      .then(() => setLoading(false));
  }, []);

  return (
    <main>
      <h1 className={`${styles["title"]} press-start-font`}>
        Welcome to Poke Collector!
      </h1>
      <CategoryNavBar />
      {loading ? <Loading /> : <ProductList productsList={productsList} />}
    </main>
  );
};
