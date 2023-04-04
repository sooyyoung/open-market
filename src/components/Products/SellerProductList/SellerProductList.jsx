import React, { useState } from "react";
import API from "../../../api/api";
import { List, Button } from "./SellerProductList.style";

export default function SellerProductList(props) {
    const { item, elementIndex, isSelect, modifyProduct } = props;
    const [image, setImage] = useState("");
    const [previewImg, setPreviewImg] = useState(item.image);
    const [productName, setProductName] = useState(item.product_name);
    const [productInfo, setProductInfo] = useState(item.product_info);
    const [price, setPrice] = useState(item.price);
    const [stock, setStock] = useState(item.stock);
    const regExp = /^[0-9]+$/;

    const imgUpload = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            setImage(file);
            setPreviewImg(reader.result);
        };
    }

    const deleteProduct = async (e) => {
        const productId = e.target.id;
        if (!window.confirm("상품을 삭제하시겠습니까?")) return
        try {
            const res = await API.delete(`/products/${productId}`, {
                headers: {
                    Authorization: window.localStorage.getItem("token")
                },
            });
            alert("상품이 삭제되었습니다.");
            window.location.reload();
        } catch (error) {
            console.error(error);
        }
    }

    const modifySuccess = async () => {
        try {
            const res = await API.put(`/products/${item.product_id}/`, {
                product_name: productName,
                price: price,
                image: image,
                shipping_method: item.shipping_method,
                shipping_fee: item.shipping_fee,
                stock: stock,
                product_info: productInfo
            }, {
                headers: {
                    Authorization: window.localStorage.getItem("token"),
                    "Content-Type": "multipart/form-data",
                }
            });
            if (res.status === 200) {
                modifyProduct(false);
            }
        } catch (error) {
            console.error(error);
        }
    }
     
    return (
        <List className={isSelect ? "select" : ""}>
            <td className="product">
                <label htmlFor="imgFile">
                    <img src={previewImg} alt={item.product_name} />
                </label>
                <input 
                    type="file"
                    id="imgFile"
                    accept="image/*"
                    onChange={(e) => imgUpload(e)}
                    style={{ "display" : "none"}}
                />
                {!isSelect ?
                    <div>
                        <p>{item.product_name}</p>
                        <span>재고: {item.stock}개</span>
                    </div> 
                : 
                    <div>
                        <input 
                            type="text" 
                            value={productName}
                            onChange={(e) => {setProductName(e.target.value)}}
                            className="productName"
                        />
                        <textarea 
                            value={productInfo} 
                            onChange={(e) => {setProductInfo(e.target.value)}}
                        ></textarea>
                        재고: 
                        <input 
                            type="text"
                            value={stock}
                            onChange={(e) => {
                                if (regExp.test(e.target.value)) {
                                    setStock(e.target.value);
                                }
                            }}
                            className="stock"
                        />
                    </div>
                }
            </td>
            <td>
                {!isSelect ?
                    <>{item.price}원</>
                :
                    <>
                        <input 
                            type="text" 
                            value={price}
                            onChange={(e) => {
                                if (regExp.test(e.target.value)) {
                                    setPrice(e.target.value);
                                }
                            }}
                            className="price"
                        /> 원
                    </>
                }
            </td>
            <td>
                {!isSelect ? 
                    <Button onClick={() => {modifyProduct(elementIndex)}}>수정</Button>
                : 
                    <Button onClick={modifySuccess}>완료</Button>
                }
            </td>
            <td>
                {!isSelect ?
                    <Button 
                        onClick={deleteProduct} 
                        id={item.product_id} 
                        delete
                    >삭제</Button>
                : <Button onClick={() => modifyProduct(false)} delete>취소</Button>
                }
            </td>
        </List>
    )
}