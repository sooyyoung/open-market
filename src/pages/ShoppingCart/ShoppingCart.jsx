import React, { useState, useEffect } from "react";
import API from "../../api/api";
import Nav from "../../components/Nav/Nav";
import ProductCart from "../../components/Products/ProductCart/ProductCart";
import plusIcon from "../../assets/icon-plus.svg";
import minusIcon from "../../assets/icon-minus.svg";
import {
  Container,
  Tab,
  Notice,
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
        const res = await API.get("/cart/", {
            headers: {
                Authorization: window.localStorage.getItem("token")
            },
        });
        setCartItem(res.data.results);
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

        {/* <Notice>
          <p>장바구니에 담긴 상품이 없습니다.</p>
          <span>원하는 상품을 장바구니에 담아보세요!</span>
        </Notice> */}

        {cartItem ? cartItem.map((item, index) => {
            return (
                <ProductCart 
                    key={index}
                    quantity={item.quantity}
                    productId={item.product_id}
                />
            )
        }) : ""
        }
        
        <CartPrice>
          <p>총 상품금액<strong>0원</strong></p>
          <img src={minusIcon} alt="" />
          <p>상품 할인<strong>0원</strong></p>
          <img src={plusIcon} alt="" />
          <p>배송비<strong>0원</strong></p>
          <p>결제 예정 금액<strong className="price">0원</strong></p>
        </CartPrice>

        <PaymentBtn>주문하기</PaymentBtn>
      </Container>
    </>
  );
}
