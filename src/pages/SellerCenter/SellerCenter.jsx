import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import API from "../../api/api";
import Nav from "../../components/Nav/Nav";
import SellerProductList from "../../components/Products/SellerProductList/SellerProductList";
import {
  Main,
  UploadBtn,
  Dashboard,
  TabMenu,
  List,
} from "./SellerCenter.style";

export default function SellerCenter() {
  const [product, setProduct] = useState("");
  const [isEdit, setIsEdit] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    getProductList();
  }, [isEdit])

  const getProductList = async () => {
    try {
        const res = await API.get("/seller", {
            headers: {
                Authorization: window.localStorage.getItem("token")
            }
        });
        setProduct(res.data.results);
    } catch (error) {
        console.error(error);
    }
  };

  const modifyProduct = (idx) => {
    const newArr = Array(product.length).fill(false);
    newArr[idx] = true;
    setIsEdit(newArr);
  }

  return (
    <>
      <Nav />
      <Main>
        <strong>판매자 센터</strong>
        <UploadBtn onClick={() => navigate("/productUpload")}>상품 업로드</UploadBtn>
        <Dashboard>
          <TabMenu>
            <div className="focus">판매중인 상품 ({product.length})</div>
            <div>주문/배송</div>
            <div>문의/리뷰</div>
            <div>스토어 설정</div>
          </TabMenu>
          <List>
            <table>
              <thead>
                <tr>
                  <td>상품정보</td>
                  <td>판매가격</td>
                  <td>수정</td>
                  <td>삭제</td>
                </tr>
              </thead>
              <tbody>
                {product ? product.map((item, index) => {
                    return (
                        <SellerProductList 
                            key={index}
                            elementIndex={index}
                            item={item}
                            isSelect={isEdit[index]}
                            modifyProduct={modifyProduct}
                        />
                    )
                }) : <tr></tr>
                }
              </tbody>
            </table>
          </List>
        </Dashboard>
      </Main>
    </>
  );
}
