import React, { useState, useEffect } from "react";
import API from "../../../api/api";
import deleteIcon from "../../../assets/delete.svg";
import {
    CartItem,
    ItemInfo,
    AmountBtn,
    ItemPrice,
    DeleteBtn,
} from "./ProductCart.style"

export default function ProductCart(props) {
    const [product, setProduct] = useState([]);
    const [price, setPrice] = useState(); 

    useEffect(() => {
        getProduct();
    }, []);

    const getProduct = async () => {
        try {
            const res = await API.get(`/products/${props.productId}/`);
            setProduct(res.data);
            setPrice(res.data.price.toLocaleString()); 
        } catch (error) {
            console.error(error);
        }
    }

    const deleteItem = async () => {
        try {
            const res = await API.delete(`/cart/${props.cartItemId}/`, {
                headers: {
                    Authorization: window.localStorage.getItem("token")
                },
            });
            // console.log(res);
            alert("장바구니의 상품이 삭제되었습니다.");
            window.location.reload();
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <CartItem>
            <span className="checkbox">
                <input type="checkbox" />
            </span>
            <div>
                <img className="image" src={product.image} alt="" />
            </div>
            <ItemInfo>
                <span>{product.store_name}</span>
                <p>{product.product_name}</p>
                <strong>{price}원</strong>
                <span className="delivery">택배배송 / {product.shipping_fee}</span>
            </ItemInfo>
            <AmountBtn>
                <button className="minus">-</button>
                <span>{props.quantity}</span>
                <button className="plus">+</button>
            </AmountBtn>
            <ItemPrice>
                <strong>{price}원</strong>
                <button>주문하기</button>
            </ItemPrice>
            <DeleteBtn onClick={deleteItem}>
                <img src={deleteIcon} alt="" />
            </DeleteBtn>
        </CartItem>
    )
}