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
    const [quantity, setQuantity] = useState(props.quantity);
    const totalPrice = product.price * quantity;

    useEffect(() => {
        getProduct();
    }, []);

    const getProduct = async () => {
        try {
            const res = await API.get(`/products/${props.productId}/`);
            setProduct(res.data);
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
            alert("장바구니의 상품이 삭제되었습니다.");
            window.location.reload();
        } catch (error) {
            console.error(error);
        }
    }

    const handleCheck = (checked) => {
        if (checked) {
            props.setCheckItem((prev) => [...prev, props.cartItemId]);
        } else {
            props.setCheckItem(props.checkItem.filter((el) => el !== props.cartItemId));
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
                    checked={props.checkItem.includes(props.cartItemId) ? true : false}
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