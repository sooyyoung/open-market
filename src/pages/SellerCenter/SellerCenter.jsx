import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import API from "../../api/api";
import Nav from "../../components/Nav/Nav";
import {
  Main,
  UploadBtn,
  Dashboard,
  TabMenu,
  List,
  Button,
} from "./SellerCenter.style";

export default function SellerCenter() {
  const [product, setProduct] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    getProductList();
  }, [product])

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
    } catch (error) {
        console.error(error);
    }
  }

  return (
    <>
      <Nav />
      <Main>
        <strong>판매자 센터</strong>
        <UploadBtn onClick={() => navigate("/productUpload")}>상품 업로드</UploadBtn>
        <Dashboard>
          <TabMenu>
            <div className="focus">판매중인 상품</div>
            <div>주문/배송</div>
            <div>문의/리뷰</div>
            <div>스토어 설정</div>
          </TabMenu>
          <List>
            <table>
              <thead>
                <tr>
                  <td>상품정보 ({product.length})</td>
                  <td>판매가격</td>
                  <td>수정</td>
                  <td>삭제</td>
                </tr>
              </thead>
              <tbody>
                {product ? product.map((item, index) => {
                    return (
                        <tr key={index}>
                            <td className="product">
                                <img src={item.image} alt="" />
                                <div>
                                <p>{item.product_name}</p>
                                <span>재고: {item.stock}개</span>
                                </div>
                            </td>
                            <td>{item.price}원</td>
                            <td>
                                <Button modify>수정</Button>
                            </td>
                            <td>
                                <Button 
                                    onClick={deleteProduct} 
                                    id={item.product_id} 
                                    delete
                                >삭제</Button>
                            </td>
                        </tr>
                    )
                }) : ""
                }
              </tbody>
            </table>
          </List>
        </Dashboard>
      </Main>
    </>
  );
}
