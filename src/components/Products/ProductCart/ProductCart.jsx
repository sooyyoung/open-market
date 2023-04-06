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
    const { cartItem, checkItem, setCheckItem } = props;
    const [product, setProduct] = useState([]);
    const [quantity, setQuantity] = useState(cartItem.quantity);
    const totalPrice = product.price * quantity;

    useEffect(() => {
        getProduct();
    }, []);

    const getProduct = async () => {
        try {
            const res = await API.get(`/products/${cartItem.product_id}/`);
            setProduct(res.data);
        } catch (error) {
            console.error(error);
        }
    }

    const quantityMinus = async () => {
        setQuantity((current) => (current > 1 ? current - 1 : 1));
        try {
            const res = await API.put(`/cart/${cartItem.cart_item_id}/`, {
                product_id: cartItem.product_id, 
                quantity: quantity - 1,
                is_active : cartItem.is_active
            }, {
                headers: {
                    Authorization: window.localStorage.getItem("token"),
                }
            });
        } catch (error) {
            console.error(error);
        }
    };

    const quantityPlus = async () => {
        setQuantity(quantity + 1);
        try {
            const res = await API.put(`/cart/${cartItem.cart_item_id}/`, {
                product_id: cartItem.product_id, 
                quantity: quantity + 1,
                is_active : cartItem.is_active
            }, {
                headers: {
                    Authorization: window.localStorage.getItem("token"),
                }
            });
        } catch (error) {
            console.error(error);
        }
    };

    const deleteItem = async () => {
        try {
            const res = await API.delete(`/cart/${cartItem.cart_item_id}/`, {
                headers: {
                    Authorization: window.localStorage.getItem("token")
                },
            });
            alert("장바구니의 상품이 삭제되었습니다.");
            window.location.reload();
        } catch (error) {
            console.error(error);
        }
    }

    const handleCheck = (checked) => {
        if (checked) {
            setCheckItem((prev) => [...prev, cartItem]);
        } else {
            setCheckItem(checkItem.filter((i) => i.product_id !== cartItem.product_id));
        }
    }

    return (
        <CartItem>
            <span className="checkbox">
                <input 
                    type="checkbox"
                    onChange={(e) => {
                        handleCheck(e.target.checked);
                    }}
                    checked={checkItem.map((i) => i.product_id).includes(cartItem.product_id) ? true : false}
                />
            </span>
            <div>
                <img className="image" src={product.image} alt="" />
            </div>
            <ItemInfo>
                <span>{product.store_name}</span>
                <p>{product.product_name}</p>
                <strong>{Number(product.price).toLocaleString()}원</strong>
                <span className="delivery">택배배송 / {product.shipping_fee}</span>
            </ItemInfo>
            <AmountBtn>
                <button className="minus" onClick={quantityMinus}>-</button>
                <span>{quantity}</span>
                <button className="plus" onClick={quantityPlus}>+</button>
            </AmountBtn>
            <ItemPrice>
                <strong>{totalPrice.toLocaleString()}원</strong>
                <button>주문하기</button>
            </ItemPrice>
            <DeleteBtn onClick={deleteItem}>
                <img src={deleteIcon} alt="" />
            </DeleteBtn>
        </CartItem>
    )
}