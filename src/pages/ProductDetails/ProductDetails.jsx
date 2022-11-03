import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import API from "../../api/api";
import Nav from "../../components/Nav/Nav";
import {
  Container,
  Details,
  ProductInfo,
  AmountBtn,
  ProductPrice,
  Button,
} from "./ProductDetails.style";

export default function ProductDetails() {
  const [productImage, setProductImage] = useState();
  const [store, setStore] = useState();
  const [productName, setProductName] = useState();
  const [productPrice, setProductPrice] = useState();

  const location = useLocation();
  const productId = location.search.split("?")[1];

  useEffect(() => {
    getProduct();
  }, []);

  const getProduct = async () => {
    try {
      const res = await API.get(`/products/${productId}/`);
      const product = res.data;
      setProductImage(product.image);
      setStore(product.store_name);
      setProductName(product.product_name);
      setProductPrice(product.price.toLocaleString());
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Nav />
      <Container>
        <div>
          <img src={productImage} alt="" />
        </div>
        <Details>
          <ProductInfo>
            <span>{store}</span>
            <p>{productName}</p>
            <strong>{productPrice}</strong>원
            <span className="delivery">택배배송 / 무료배송</span>
          </ProductInfo>

          <AmountBtn>
            <button className="minus">-</button>
            <span>1</span>
            <button className="plus">+</button>
          </AmountBtn>

          <ProductPrice>
            <p>총 상품 금액</p>
            <span>총 수량 1개</span>
            <span className="verticalBar">|</span>
            <strong>{productPrice}</strong>원
          </ProductPrice>

          <Button BuyBtn>바로 구매</Button>
          <Button CartBtn>장바구니</Button>
        </Details>
      </Container>
    </>
  );
}
