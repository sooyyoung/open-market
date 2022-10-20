import React from "react";
import { useNavigate } from "react-router-dom";
import { Main } from "./NotFound.style";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <Main>
      <strong>페이지를 찾을 수 없습니다.</strong>
      <p>
        페이지가 존재하지 않거나 사용할 수 없는 페이지입니다.
        <br />웹 주소가 올바른지 확인해 주세요.
      </p>
      <button
        className="goHome"
        onClick={() => {
          navigate("/");
        }}
      >
        메인으로
      </button>
      <button
        className="goPrevious"
        onClick={() => {
          navigate(-1);
        }}
      >
        이전 페이지
      </button>
    </Main>
  );
}
