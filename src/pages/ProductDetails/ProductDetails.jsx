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
  const [productImage, setProductImage] = useState();
  const [store, setStore] = useState();
  const [productName, setProductName] = useState();
  const [productPrice, setProductPrice] = useState();
  const [productInfo, setProductInfo] = useState();
  const [shippingFee, setShippingFee] = useState();
  const [price, setPrice] = useState(); // 가격 천 단위 콤마 표시
  const [quantity, setQuantity] = useState(1);
  const totalPrice = (productPrice * quantity).toLocaleString();
  const [check, setCheck] = useState(true);
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
      setProductImage(res.data.image);
      setStore(res.data.store_name);
      setProductName(res.data.product_name);
      setProductInfo(res.data.product_info);
      setShippingFee(res.data.shipping_fee);
      setProductPrice(res.data.price);
      setPrice(res.data.price.toLocaleString()); // 가격 천 단위 콤마 표시
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
            check : check
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

  // +, - 버튼
  const quantityMinus = () => {
    setQuantity((current) => (current > 1 ? current - 1 : 1));
  };

  const quantityPlus = () => {
    setQuantity(quantity + 1);
  };

  // tab
  const changeTab = (index) => {
    setTab(index);
  };

  // tab list
  const tabList = {
    0: productInfo,
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
            <span className="delivery">택배배송 / {shippingFee}</span>
          </ProductInfo>

          <AmountBtn>
            <button className="minus" onClick={quantityMinus}>-</button>
            <span>{quantity}</span>
            <button className="plus" onClick={quantityPlus}>+</button>
          </AmountBtn>

          <ProductPrice>
            <p>총 상품 금액</p>
            <span>총 수량 {quantity}개</span>
            <span className="verticalBar">|</span>
            <strong>{totalPrice}</strong>원
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
          > 상품 설명
          </li>
          <li
            onClick={() => {changeTab(1)}}
            className={tab === 1 ? "active" : null}
          > 리뷰
          </li>
          <li
            onClick={() => {changeTab(2)}}
            className={tab === 2 ? "active" : null}
          > Q&A
          </li>
          <li
            onClick={() => {changeTab(3)}}
            className={tab === 3 ? "active" : null}
          > 반품/교환정보
          </li>
        </ul>
        <div>{tabList[tab]}</div>
      </ProductDescription>
    </>
  );
}
