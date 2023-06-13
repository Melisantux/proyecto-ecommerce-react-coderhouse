import { CategoryNavBar } from "../../components/CategoryNavBar/CategoryNavBar.component";
import { getProducts } from "../../asyncMock";
import { ProductList } from "../../components/ProductList/ProductList.component";
import { useEffect, useState } from "react";
import styles from "./Home.module.css";

/** @typedef {import('../../asyncMock').Product} Product */

export const Home = () => {
  /** @type {[productList: Product[], setProductsList: React.Dispatch<Product[]>]} */
  const [productsList, setProductsList] = useState([]);

  useEffect(() => {
    getProducts().then((response) => setProductsList(response));
  }, []);

  return (
    <main>
      <h1 className={`${styles["title"]} press-start-font`}>
        Welcome to Poke Collector!
      </h1>
      <CategoryNavBar />
      <ProductList productsList={productsList} />
    </main>
  );
};
