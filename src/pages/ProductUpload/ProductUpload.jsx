import React from "react";
import Nav from "../../components/Nav/Nav";
import { Main, Dashboard, Notice, Container } from "./ProductUpload.style";

export default function ProductUpload() {
  return (
  <>
    <Nav />
    <Main>
        <strong>상품 등록</strong>
        <Dashboard>
            <Notice>
                <p>* 상품 등록 주의사항</p>
                <div>- 너무 귀여운 사진은 심장이 아파올 수 있습니다.</div>
            </Notice>
            <Container>
                <div>
                    <div className="imgBox">
                        <p>상품 이미지</p>
                        <img src="" alt="" />
                    </div>
                    <div className="infoBox">
                        <p>상품명</p>
                        <input type="text" style={{ "width" : "100%"}} />
                        <p>판매가</p>
                        <input type="text" /><span>원</span>
                        <p>배송방법</p> 
                        <button>택배, 소포, 등기</button> 
                        <button>직접배송(화물배달)</button>
                        <p>기본 배송비</p>
                        <input type="text" /><span>원</span>
                        <p>재고</p>
                        <input type="text" /><span>개</span>
                    </div>
                </div>
                <div className="detailBox">
                    <p>상품 상세 정보</p>
                    <div className="edit">
                        <textarea></textarea>
                    </div>
                </div>
                <div className="btn">
                    <button>취소</button>
                    <button>저장하기</button>
                </div>
            </Container>
        </Dashboard>
    </Main>
  </>
  )
}
