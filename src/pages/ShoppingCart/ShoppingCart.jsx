import React, { useState, useEffect } from "react";
import API from "../../api/api";
import Nav from "../../components/Nav/Nav";
import deleteIcon from "../../assets/delete.svg";
import plusIcon from "../../assets/icon-plus.svg";
import minusIcon from "../../assets/icon-minus.svg";
import {
  Container,
  Tab,
  Notice,
  CartItem,
  ItemInfo,
  AmountBtn,
  ItemPrice,
  DeleteBtn,
  CartPrice,
  PaymentBtn,
} from "./ShoppingCart.style";

export default function ShoppingCart() {
  const [cartItem, setCartItem] = useState("");

  useEffect(() => {
    getCart();
  }, []);

  const getCart = async () => {
    try {
      await API.get("/cart/", {
        headers: {
          Authorization : window.localStorage.getItem("token")
        }
      })
        .then(res => {
          // console.log(res.data);
          setCartItem(res.data);
        })
        .catch(error => {
          console.log(error);
        })
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <Nav />
      <Container>
        <h2>장바구니</h2>
        <Tab>
          <span><input type="checkbox" /></span>
          <span>상품정보</span>
          <span>수량</span>
          <span>상품금액</span>
        </Tab>

        {cartItem.length ? 
          <>
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

            <CartPrice>
              <p>총 상품금액<strong>00,000원</strong></p>
              <img src={minusIcon} alt="" />
              <p>상품 할인<strong>0원</strong></p>
              <img src={plusIcon} alt="" />
              <p>배송비<strong>0원</strong></p>
              <p>결제 예정 금액<strong className="price">00,000원</strong></p>
            </CartPrice>

            <PaymentBtn>주문하기</PaymentBtn>
          </>
          :
          <Notice>
            <p>장바구니에 담긴 상품이 없습니다.</p>
            <span>원하는 상품을 장바구니에 담아보세요!</span>
          </Notice>
        }
        
      </Container>
    </>
  );
}
