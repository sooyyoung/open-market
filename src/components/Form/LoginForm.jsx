import React from "react";
import styled from "styled-components";
import FormHeader from "./FormHeader";

export default function LoginForm() {
  return (
    <LoginContainer>
      <FormHeader />
      <form>
        <input type="text" placeholder="아이디" />
        <input type="password" placeholder="비밀번호" />
        <button className="loginBtn">로그인</button>
      </form>
    </LoginContainer>
  );
}

const LoginContainer = styled.section`
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
      height: 60px;
      margin-top: 30px;
      border-radius: 5px;
      font-size: 18px;
      font-weight: bold;
      color: #fff;
      background-color: royalblue;
    }
  }
`;
