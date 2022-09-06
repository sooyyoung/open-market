import React from "react";
import FormHeader from "./FormHeader";
import { LoginContainer } from "./LoginForm.style";

export default function LoginForm() {
  return (
    <LoginContainer>
      <FormHeader buyer="구매회원 로그인" seller="판매회원 로그인" />
      <form>
        <input type="text" placeholder="아이디" />
        <input type="password" placeholder="비밀번호" />
        <button className="loginBtn">로그인</button>
      </form>
    </LoginContainer>
  );
}
