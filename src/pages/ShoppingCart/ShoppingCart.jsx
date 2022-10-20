import React from "react";
import Nav from "../../components/Nav/Nav";
import { Container, Tab } from "./ShoppingCart.style";

export default function ShoppingCart() {
  return (
    <>
      <Nav />
      <Container>
        <h2>장바구니</h2>
        <Tab>
          <th>
            <input type="checkbox" />
          </th>
          <th>상품정보</th>
          <th>수량</th>
          <th>상품금액</th>
        </Tab>

        <div className="notice">
          <p>장바구니에 담긴 상품이 없습니다.</p>
          <span>원하는 상품을 장바구니에 담아보세요!</span>
        </div>
      </Container>
    </>
  );
}
