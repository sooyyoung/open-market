import React from "react";
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
  return (
    <>
      <Nav />
      <Container>
        <img src="https://via.placeholder.com/600" alt="" />
        <Details>
          <ProductInfo>
            <span>상품 판매자</span>
            <p>상품명</p>
            <strong>가격</strong>원
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
            <strong>17,500</strong>원
          </ProductPrice>

          <Button BuyBtn>바로 구매</Button>
          <Button CartBtn>장바구니</Button>
        </Details>
      </Container>
    </>
  );
}
