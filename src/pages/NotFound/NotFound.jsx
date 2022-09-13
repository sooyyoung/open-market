import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import NotFoundIcon from "../../assets/404.svg";

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

const Main = styled.section`
  width: 720px;
  height: 250px;
  margin: 300px auto 0;
  padding: 20px 0 0 320px;
  background: url(${NotFoundIcon}) no-repeat;
  strong {
    font-size: 36px;
    margin-bottom: 20px;
    display: block;
  }
  p {
    font-size: 16px;
    line-height: 20px;
    color: #767676;
    margin-bottom: 40px;
  }
  button {
    width: 190px;
    height: 60px;
    border-radius: 5px;
    &.goHome {
      background: royalblue;
      margin-right: 15px;
      color: #fff;
    }
    &.goPrevious {
      border: 1px solid #c4c4c4;
    }
  }
`;
