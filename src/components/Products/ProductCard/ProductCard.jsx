import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import API from "../../../api/api";
import { Container, Product } from "./ProductCard.style";

export default function ProductCard() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

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

  // 상품 이미지 클릭 시 상세 페이지로 이동
  const moveProductDetails = () => {
    navigate(`/productDetails`);
  };

  return (
    <>
      <Container>
        {products.map((item, index) => {
          return (
            <Product key={index}>
              <img src={item.image} alt="" onClick={moveProductDetails} />
              <span>{item.seller_store}</span>
              <p>{item.product_name}</p>
              <strong>{item.price.toLocaleString()}</strong>원
            </Product>
          );
        })}
      </Container>
    </>
  );
}
