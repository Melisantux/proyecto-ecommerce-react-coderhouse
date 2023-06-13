import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProductBySlug } from "../../asyncMock";

/** @typedef {import('../../asyncMock').Product} Product */

export const ProductDetail = () => {
  const { slug } = useParams();

  /** @type {[product: Product, setProduct: React.Dispatch<Product>]} */
  const [product, setProduct] = useState([]);

  useEffect(() => {
    getProductBySlug(slug).then((response) => setProduct(response));
  }, []);

  console.log({ product });

  return <div>ProductDetail</div>;
};
