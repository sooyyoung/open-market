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
    const [quantity, setQuantity] = useState(props.quantity);
    const totalPrice = (product.price * quantity).toLocaleString();

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

    const quantityMinus = async () => {
        setQuantity((current) => (current > 1 ? current - 1 : 1));
        try {
            const res = await API.put(`/cart/${props.cartItemId}/`, {
                product_id: props.productId, 
                quantity: quantity - 1,
                is_active : props.isActive
            }, {
                headers: {
                    Authorization: window.localStorage.getItem("token"),
                }
            });
            // console.log(res.data);
        } catch (error) {
            console.error(error);
        }
    };

    const quantityPlus = async () => {
        setQuantity(quantity + 1);
        try {
            const res = await API.put(`/cart/${props.cartItemId}/`, {
                product_id: props.productId, 
                quantity: quantity + 1,
                is_active : props.isActive
            }, {
                headers: {
                    Authorization: window.localStorage.getItem("token"),
                }
            });
            // console.log(res.data);
        } catch (error) {
            console.error(error);
        }
    };

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
                <button className="minus" onClick={quantityMinus}>-</button>
                <span>{quantity}</span>
                <button className="plus" onClick={quantityPlus}>+</button>
            </AmountBtn>
            <ItemPrice>
                <strong>{totalPrice}원</strong>
                <button>주문하기</button>
            </ItemPrice>
            <DeleteBtn onClick={deleteItem}>
                <img src={deleteIcon} alt="" />
            </DeleteBtn>
        </CartItem>
    )
}