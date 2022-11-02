import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
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
              <Link
                to={{
                  pathname: `/productDetails`,
                  search: `${item.product_id}`,
                }}
              >
                <img src={item.image} alt="" />
              </Link>
              <span>{item.store_name}</span>
              <p>{item.product_name}</p>
              <span className="price">
                <strong>{item.price.toLocaleString()}</strong>원
              </span>
            </Product>
          );
        })}
      </Container>
    </>
  );
}
