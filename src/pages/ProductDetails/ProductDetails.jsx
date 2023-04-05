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
  ProductDescription,
} from "./ProductDetails.style";

export default function ProductDetails() {
  const [product, setProduct] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const totalPrice = product.price * quantity;
  const [soldout, setSoldout] = useState(true);
  let [tab, setTab] = useState(0);

  const location = useLocation();
  const productId = location.search.split("?")[1];

  useEffect(() => {
    getProduct();
  }, []);

  const getProduct = async () => {
    try {
      const res = await API.get(`/products/${productId}/`);
      setProduct(res.data);
      if (res.data.stock === 0) {
        setSoldout(false);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const goCart = async () => {
    try {
        const res = await API.post("/cart/", {
            product_id: productId, 
            quantity: quantity,
            check : soldout
        }, {
            headers: {
                Authorization: window.localStorage.getItem("token"),
            }
        });
        if (res.status === 201) {
            alert("장바구니에 상품이 담겼습니다.")
        }
    } catch (error) {
        console.log(error);
    }
  }

  // tab
  const changeTab = (index) => {
    setTab(index);
  };

  // tab list
  const tabList = {
    0: product.product_info,
  };

  return (
    <>
      <Nav />
      <Container>
        <div>
          <img src={product.image} alt="" />
        </div>
        <Details>
          <ProductInfo>
            <span>{product.store_name}</span>
            <p>{product.product_name}</p>
            <strong>{Number(product.price).toLocaleString()}</strong>원
            <span className="delivery">택배배송 / {product.shipping_fee}</span>
          </ProductInfo>

          <AmountBtn>
            <button className="minus" onClick={() => setQuantity((current) => (current > 1 ? current - 1 : 1))}>-</button>
            <span>{quantity}</span>
            <button className="plus" onClick={() => setQuantity(quantity + 1)}>+</button>
          </AmountBtn>

          <ProductPrice>
            <p>총 상품 금액</p>
            <span>총 수량 {quantity}개</span>
            <span className="verticalBar">|</span>
            <strong>{totalPrice.toLocaleString()}</strong>원
          </ProductPrice>
          
          {soldout ? 
            <>
                <Button BuyBtn>바로 구매</Button>
                <Button CartBtn onClick={goCart}>장바구니</Button>
            </>
          : <Button SoldOut>품절</Button>
          }
          
        </Details>
      </Container>

      <ProductDescription>
        <ul>
          <li
            onClick={() => {changeTab(0)}}
            className={tab === 0 ? "active" : null}
          >상품 설명</li>
          <li
            onClick={() => {changeTab(1)}}
            className={tab === 1 ? "active" : null}
          >리뷰</li>
          <li
            onClick={() => {changeTab(2)}}
            className={tab === 2 ? "active" : null}
          >Q&A</li>
          <li
            onClick={() => {changeTab(3)}}
            className={tab === 3 ? "active" : null}
          >반품/교환정보</li>
        </ul>
        <div>{tabList[tab]}</div>
      </ProductDescription>
    </>
  );
}
