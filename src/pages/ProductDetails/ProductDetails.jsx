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
  const [price, setPrice] = useState(); // 가격 천 단위 콤마 표시
  const [quantity, setQuantity] = useState(1);
  const totalPrice = (productPrice * quantity).toLocaleString();

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
      setProductPrice(product.price);
      setPrice(product.price.toLocaleString()); // 가격 천 단위 콤마 표시
    } catch (error) {
      console.error(error);
    }
  };

  // +, - 버튼
  const quantityMinus = () => {
    setQuantity((current) => (current > 1 ? current - 1 : 1));
  };

  const quantityPlus = () => {
    setQuantity(quantity + 1);
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
            <strong>{price}</strong>원
            <span className="delivery">택배배송 / 무료배송</span>
          </ProductInfo>

          <AmountBtn>
            <button className="minus" onClick={quantityMinus}>
              -
            </button>
            <span>{quantity}</span>
            <button className="plus" onClick={quantityPlus}>
              +
            </button>
          </AmountBtn>

          <ProductPrice>
            <p>총 상품 금액</p>
            <span>총 수량 {quantity}개</span>
            <span className="verticalBar">|</span>
            <strong>{totalPrice}</strong>원
          </ProductPrice>

          <Button BuyBtn>바로 구매</Button>
          <Button CartBtn>장바구니</Button>
        </Details>
      </Container>
    </>
  );
}
