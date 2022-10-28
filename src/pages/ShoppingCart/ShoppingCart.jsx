import React from "react";
import Nav from "../../components/Nav/Nav";
import deleteIcon from "../../assets/delete.svg";
import {
  Container,
  Tab,
  Notice,
  CartItem,
  ItemInfo,
  AmountBtn,
  ItemPrice,
  DeleteBtn
} from "./ShoppingCart.style";

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

        {/* <Notice>
          <p>장바구니에 담긴 상품이 없습니다.</p>
          <span>원하는 상품을 장바구니에 담아보세요!</span>
        </Notice> */}

        <CartItem>
          <span className="checkbox">
            <input type="checkbox" />
          </span>
          <img src="https://via.placeholder.com/160" alt="" />
          <ItemInfo>
            <span>상품 판매자</span>
            <p>상품명</p>
            <strong>가격</strong>
            <span className="delivery">택배배송 / 무료배송</span>
          </ItemInfo>
          <AmountBtn>
            <button className="minus">-</button>
            <span>1</span>
            <button className="plus">+</button>
          </AmountBtn>
          <ItemPrice>
            <strong>가격</strong>
            <button>주문하기</button>
          </ItemPrice>
          <DeleteBtn>
            <img src={deleteIcon} alt="" />
          </DeleteBtn>
        </CartItem>
      </Container>
    </>
  );
}
