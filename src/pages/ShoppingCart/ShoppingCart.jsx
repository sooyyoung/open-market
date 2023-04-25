import React, { useState, useEffect } from "react";
import { getCart, deleteItemAll } from "../../api/cartApi";
import { getProduct } from "../../api/productApi";
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
  DeleteBtn
} from "./ShoppingCart.style";

export default function ShoppingCart() {
  const [cartItem, setCartItem] = useState([]);
  const [checkItem, setCheckItem] = useState([]);
  const [product, setProduct] = useState([]);
  const [totalProduct, setTotalProduct] = useState(0);
  let cartArr = [];

  useEffect(() => {
    getCart().then(res => {
        setCartItem(res);
        getData(res);
    })
  }, []);

  useEffect(() => {
    setTotalProduct(totalPrice);
  }, [product]);

  useEffect(() => {
    let initial = [];
    cartItem.map((i) => {
        return initial.push(i);
    });
    setCheckItem(initial);
  }, [cartItem]);

  const getData = async (res) => {
    const productId = await Promise.all(
        res.map((i) => i.product_id)
    )
    await Promise.all(
        productId.map((i) => getProduct(i).then(res => setProduct(prev => [...prev, res])))
    )
  }

  product.map((p) =>
    cartItem
        .filter((c) => p.product_id === c.product_id)
        .map((c) => {
            p.quantity = c.quantity;
            p.cart_item_id = c.cart_item_id;
            p.is_active = c.is_active;
            return cartArr.push(p);
        })
  );

  const priceArr = cartArr.filter((i) => i.is_active).map((i) => i.price * i.quantity);
  const feeArr = cartArr.filter((i) => i.is_active).map((i) => i.shipping_fee);

  const total = (arr) => {
    const res = arr.reduce((acc, cur) => {
        acc += cur;
        return acc;
    }, 0);
    return res;
  };

  const totalPrice = total(priceArr); 
  const totalFee = total(feeArr);
  const totalPay = totalProduct + totalFee;

  const handleCheckAll = (checked) => {
    if (checked) {
        const checkArray = [];
        cartItem.map(i => {
            return checkArray.push(i);
        });
        setCheckItem(checkArray);
    } else {
        setCheckItem([]);
    }
  }

  const deleteProduct = async () => {
    if (!window.confirm("모든 상품을 삭제하시겠습니까?")) return;
    deleteItemAll().then(() => {
        alert("장바구니의 모든 상품이 삭제되었습니다.");
        window.location.reload();
    })
  }

  return (
    <>
      <Nav />
      <Container>
        <h2>장바구니</h2>
        <Tab>
          <span>
            <input 
                type="checkbox" 
                onChange={(e) => {
                    handleCheckAll(e.target.checked);
                }} 
                checked={
                    checkItem.length === 0 
                        ? false 
                        : cartItem.length === checkItem.length 
                        ? true 
                        : false
                }
            />
        </span>
          <span>상품정보</span>
          <span>수량</span>
          <span>상품금액</span>
        </Tab>

        {cartItem.length ? cartArr.map((item, index) => {
            return (
                <ProductCart 
                    key={index}
                    cartItem={item}
                    checkItem={checkItem}
                    setCheckItem={setCheckItem}
                    totalProduct={totalProduct}
                    setTotalProduct={setTotalProduct}
                />
            )
        }) :
        <Notice>
            <p>장바구니에 담긴 상품이 없습니다.</p>
            <span>원하는 상품을 장바구니에 담아보세요!</span>
        </Notice>
        }
        
        {cartItem.length ? 
        <>
            <DeleteBtn onClick={deleteProduct}>장바구니 비우기</DeleteBtn>
            <CartPrice>
                <p>총 상품금액<strong>{totalProduct.toLocaleString()}원</strong></p>
                <img src={minusIcon} alt="" />
                <p>상품 할인<strong>0원</strong></p>
                <img src={plusIcon} alt="" />
                <p>배송비<strong>{totalFee.toLocaleString()}원</strong></p>
                <p>결제 예정 금액<strong className="price">{totalPay.toLocaleString()}원</strong></p>
            </CartPrice>
            <PaymentBtn>주문하기</PaymentBtn> 
        </>
        : ""
        }
      </Container>
    </>
  );
}
