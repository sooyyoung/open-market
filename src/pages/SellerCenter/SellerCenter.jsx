import React from "react";
import { useNavigate } from "react-router-dom";
import Nav from "../../components/Nav/Nav";
import image from "../../assets/img.svg";
import {
  Main,
  UploadBtn,
  Dashboard,
  TabMenu,
  List,
  Button,
} from "./SellerCenter.style";

export default function SellerCenter() {
  const navigate = useNavigate();

  // 상품 업로드 페이지로 이동
  const moveProductUpload = () => {
    navigate("/productUpload");
  };

  return (
    <>
      <Nav />
      <Main>
        <h2 className="ir">판매자 센터</h2>
        <strong>판매자 센터</strong>
        <UploadBtn onClick={moveProductUpload}>상품 업로드</UploadBtn>

        <Dashboard>
          <TabMenu>
            <div>판매중인 상품</div>
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
                <tr>
                  <td className="product">
                    <img src={image} alt="" />
                    <div>
                      <p>000 운동화</p>
                      <span>재고 10개</span>
                    </div>
                  </td>
                  <td>139,500원</td>
                  <td>
                    <Button modify>수정</Button>
                  </td>
                  <td>
                    <Button delete>삭제</Button>
                  </td>
                </tr>
              </tbody>
            </table>
          </List>
        </Dashboard>
      </Main>
    </>
  );
}
