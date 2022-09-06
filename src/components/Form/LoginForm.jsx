import React, { useState } from "react";
import FormHeader from "./FormHeader";
import { LoginContainer, Message } from "./LoginForm.style";

export default function LoginForm() {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");

  // error 메시지
  const [idMessage, setIdMessage] = useState("");
  const [pwMessage, setPwMessage] = useState("");

  const login = (e) => {
    e.preventDefault();

    if (id === "") {
      setIdMessage("아이디를 입력해주세요.");
    } else if (pw === "") {
      setPwMessage("비밀번호를 입력해주세요.");
    }
  };

  return (
    <LoginContainer>
      <FormHeader buyer="구매회원 로그인" seller="판매회원 로그인" />
      <form>
        <input
          type="text"
          placeholder="아이디"
          required
          value={id}
          onChange={(e) => {
            setId(e.target.value);
            setIdMessage("");
          }}
        />
        <Message>{idMessage}</Message>
        <input
          type="password"
          placeholder="비밀번호"
          required
          value={pw}
          onChange={(e) => {
            setPw(e.target.value);
            setPwMessage("");
          }}
        />
        <Message>{pwMessage}</Message>
        <button type="submit" className="loginBtn" onClick={login}>
          로그인
        </button>
      </form>
    </LoginContainer>
  );
}
