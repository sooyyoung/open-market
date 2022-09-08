import React from "react";
import styled from "styled-components";

export default function SellerJoinForm() {
  return (
    <>
      <SellerCode htmlFor="sellerCode">사업자 등록번호</SellerCode>
      <input type="text" id="sellerCode" className="id" required />
      <button className="check" type="button">
        인증
      </button>

      <label htmlFor="storeName">스토어 이름</label>
      <input type="text" id="storeName" required />
    </>
  );
}

const SellerCode = styled.label`
  padding-top: 40px;
`;
