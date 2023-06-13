import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CategoryNavBar } from "../../components/CategoryNavBar/CategoryNavBar.component";
import { ProductList } from "../../components/ProductList/ProductList.component";
import { getProductsByCategory } from "../../asyncMock";
import styles from "./Category.module.css";

/** @typedef {import('../../asyncMock').Product} Product */

export const Category = () => {
  const { category } = useParams();

  /** @type {[productList: Product[], setProductsList: React.Dispatch<Product[]>]} */
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    getProductsByCategory(category).then((response) =>
      setProductList(response)
    );
  }, [category]);

  return (
    <main>
      <h1 className={`${styles["title"]} press-start-font`}>
        Welcome to Poke Collector!
      </h1>
      <CategoryNavBar />
      <ProductList productsList={productList} />
    </main>
  );
};
