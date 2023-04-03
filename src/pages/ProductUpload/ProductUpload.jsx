import React, { useState } from "react";
import API from "../../api/api";
import Nav from "../../components/Nav/Nav";
import { Main, Dashboard, Notice, Container } from "./ProductUpload.style";

export default function ProductUpload() {
  const [productName, setProductName] = useState("");
  const [image, setImage] = useState("");
  const [previewImg, setPreviewImg] = useState("");
  const [price, setPrice] = useState("");
  const [shippingMethod, setShippingMethod] = useState("");
  const [shippingFee, setShippingFee] = useState("");
  const [stock, setStock] = useState("");
  const [productInfo, setProductInfo] = useState("");
  const regExp = /^[0-9]+$/;

  const cancelUpload = () => {
    if (!window.confirm("업로드를 취소하시겠습니까?")) return
    window.location.pathname = "/sellerCenter";
  }

  const imgUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
        setImage(file);
        setPreviewImg(reader.result);
   	};
  }

  const upload = async () => {
    try {
        const res = await API.post("/products/", {
            "product_name": productName,
            "image": image,
            "price": price,
            "shipping_method": shippingMethod,
            "shipping_fee": shippingFee,
            "stock": stock,
            "product_info": productInfo,
        }, {
            headers: {
                Authorization: window.localStorage.getItem("token"),
                "Content-Type": "multipart/form-data",
            }
        })
        if (res.status === 201) {
            alert("상품이 등록되었습니다!");
            window.location.pathname = "/sellerCenter";
        }
    } catch (error) {
        console.error(error.response.data);
    }
  }

  return (
  <>
    <Nav />
    <Main>
        <strong>상품 등록</strong>
        <Dashboard>
            <Notice>
                <p>* 상품 등록 주의사항</p>
                <div>
                    - 허위, 과대광고를 통한 잘못된 제품 정보 전달은 불가합니다. <br /><br />
                    - 유통 기한을 경과한 제품은 판매할 수 없습니다. <br /><br />
                    - 너무 귀여운 사진은 심장이 아파올 수 있습니다.😊
                </div>
            </Notice>
            <Container>
                <div>
                    <div className="imgBox">
                        <p>상품 이미지</p>
                        {previewImg ? <img src={previewImg} /> : ""}
                        <label className={previewImg ? "imgUpload progress" : "imgUpload"} htmlFor="imgFile"></label>
                        <input 
                            type="file"
                            id="imgFile"
                            accept="image/*"
                            onChange={(e) => imgUpload(e)}
                            style={{ "display" : "none"}}
                        />
                    </div>
                    <div className="infoBox">
                        <p>상품명</p>
                        <input 
                            type="text" 
                            value={productName}
                            onChange={(e) => {setProductName(e.target.value)}}
                            style={{ "width" : "100%"}} 
                        />
                        <p>판매가</p>
                        <input 
                            type="text" 
                            value={price}
                            onChange={(e) => {
                                if (regExp.test(e.target.value)) {
                                    setPrice(e.target.value);
                                }
                            }}
                        /><span>원</span>
                        <p>배송방법</p> 
                        <button onClick={() => setShippingMethod("PARCEL")}>택배, 소포, 등기</button> 
                        <button onClick={() => setShippingMethod("DELIVERY")}>직접배송(화물배달)</button>
                        <p>기본 배송비</p>
                        <input 
                            type="text"
                            value={shippingFee}
                            onChange={(e) => {
                                if(regExp.test(e.target.value)){
                                    setShippingFee(e.target.value);
                                }
                            }}
                        /><span>원</span>
                        <p>재고</p>
                        <input 
                            type="text" 
                            value={stock}
                            onChange={(e) => {
                                if (regExp.test(e.target.value)) {
                                    setStock(e.target.value);
                                }
                            }}
                        /><span>개</span>
                    </div>
                </div>
                <div className="detailBox">
                    <p>상품 상세 정보</p>
                    <div className="edit">
                        <textarea 
                            value={productInfo}
                            onChange={(e) => {setProductInfo(e.target.value)}}
                        ></textarea>
                    </div>
                </div>
                <div className="btn">
                    <button onClick={cancelUpload}>취소</button>
                    <button onClick={upload}>저장하기</button>
                </div>
            </Container>
        </Dashboard>
    </Main>
  </>
  )
}
