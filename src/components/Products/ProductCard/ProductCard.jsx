import React, { useState, useEffect } from "react";
import API from "../../../api/api";
import { Container, Product } from "./ProductCard.style";

export default function ProductCard() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProductList();
  }, []);

  const getProductList = async () => {
    try {
      const res = await API.get("/products/");
      const product = res.data.results;
      setProducts(product);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Container>
        {products.map((item, index) => {
          return (
            <Product key={index}>
              <img src={item.image} alt="" />
              <span>{item.seller_store}</span>
              <p>{item.product_name}</p>
              <strong>{item.price}</strong>원
            </Product>
          );
        })}
      </Container>
    </>
  );
}
