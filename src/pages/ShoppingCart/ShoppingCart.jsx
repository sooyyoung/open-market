import React from "react";
import Nav from "../../components/Nav/Nav";
import { Container, Tab, Notice } from "./ShoppingCart.style";

export default function ShoppingCart() {
  return (
    <>
      <Nav />
      <Container>
        <h2>장바구니</h2>
        <Tab>
          <span>
            <input type="checkbox" />
          </span>
          <span>상품정보</span>
          <span>수량</span>
          <span>상품금액</span>
        </Tab>

        <Notice>
          <p>장바구니에 담긴 상품이 없습니다.</p>
          <span>원하는 상품을 장바구니에 담아보세요!</span>
        </Notice>
      </Container>
    </>
  );
}
