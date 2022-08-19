import React, { useState } from "react";
import styled from "styled-components";

export default function FormHeader() {
  const [tabBtn, setTabBtn] = useState(true);

  // 구매회원 or 판매회원 로그인 Tab
  const handleClick = () => {
    setTabBtn((tabBtn) => !tabBtn);
  };

  return (
    <TapBtn>
      <button onClick={handleClick} className={tabBtn ? "on" : "disabled"}>
        구매회원 로그인
      </button>
      <button onClick={handleClick} className={tabBtn ? "disabled" : "on"}>
        판매회원 로그인
      </button>
    </TapBtn>
  );
}

const TapBtn = styled.div`
  button {
    width: 50%;
    height: 60px;
    border: 1px solid #c4c4c4;
    border-radius: 10px 10px 0 0;
    font-size: 18px;
  }
  button.on {
    background-color: #fff;
    border-bottom: none;
  }
  button.disabled {
    background-color: #f2f2f2;
  }
`;
