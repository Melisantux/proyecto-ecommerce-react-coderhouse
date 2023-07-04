import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CategoryNavBar } from "../../components/CategoryNavBar/CategoryNavBar.component";
import { ProductList } from "../../components/ProductList/ProductList.component";
import { getProductsByCategory } from "../../asyncMock";
import styles from "./Category.module.css";
import {
  collection,
  query,
  where,
  getDocs,
  getFirestore,
} from "firebase/firestore";
import { Loading } from "../../components/Loading/Loading.component";

/** @typedef {import('../../asyncMock').Product} Product */

export const Category = () => {
  const { category } = useParams();

  /** @type {[productList: Product[], setProductsList: React.Dispatch<Product[]>]} */
  const [productList, setProductList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    const db = getFirestore();

    const productCollection = collection(db, "products");

    const productQuery = query(
      productCollection,
      where("category", "==", category)
    );

    getDocs(productQuery)
      .then((snapshot) => {
        setProductList(
          snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
        );
      })
      .catch((error) => console(error))
      .then(() => setLoading(false));

    // getProductsByCategory(category).then((response) =>
    //   setProductList(response)
    // );
  }, [category]);

  return (
    <main>
      <h1 className={`${styles["title"]} press-start-font`}>
        Welcome to Poke Collector!
      </h1>
      <CategoryNavBar />
      {loading ? <Loading /> : <ProductList productsList={productList} />}
    </main>
  );
};
