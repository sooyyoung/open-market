import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../assets/logo.png";

export default function Login() {
  const [tabBtn, setTabBtn] = useState(true);

  // 구매회원 or 판매회원 로그인 Tab
  const handleClick = () => {
    setTabBtn((tabBtn) => !tabBtn);
  };

  return (
    <Main>
      <LoginBox>
        <button onClick={handleClick} className={tabBtn ? "on" : "disabled"}>
          구매회원 로그인
        </button>
        <button onClick={handleClick} className={tabBtn ? "disabled" : "on"}>
          판매회원 로그인
        </button>
        <form>
          <input type="text" placeholder="아이디" />
          <input type="password" placeholder="비밀번호" />
          <button className="loginBtn">로그인</button>
        </form>
        <div className="joinFind">
          <Link to="/join" className="join">
            회원가입
          </Link>
          <Link to="" className="find">
            아이디/비밀번호 찾기
          </Link>
        </div>
      </LoginBox>
    </Main>
  );
}

const Main = styled.section`
  width: 550px;
  margin: 100px auto;
  padding-top: 100px;
  background: url(${logo}) top center no-repeat;
  background-size: 65%;
`;

const LoginBox = styled.div`
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

  form {
    padding: 50px 35px 35px;
    border: 1px solid #c4c4c4;
    border-top: none;
    border-radius: 0 0 10px 10px;
    input {
      width: 100%;
      padding: 20px 0;
      margin-bottom: 5px;
      font-size: 16px;
      color: #767676;
      border-bottom: 1px solid #c4c4c4;
    }
    button.loginBtn {
      width: 100%;
      margin-top: 30px;
      border-radius: 5px;
      font-size: 18px;
      font-weight: bold;
      color: #fff;
      background-color: royalblue;
    }
  }

  .joinFind {
    margin-top: 30px;
    text-align: center;
    .join {
      color: #333333;
      &::after {
        content: "|";
        margin: 0 15px;
      }
    }
  }
`;
