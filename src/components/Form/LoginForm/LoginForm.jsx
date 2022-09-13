import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import API from "../../../api/api";
import FormHeader from "../FormHeader";
import { LoginContainer, Message } from "./LoginForm.style";

export default function LoginForm() {
  const location = useLocation();
  const navigate = useNavigate();
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");

  // error 메시지
  const [idMessage, setIdMessage] = useState("");
  const [pwMessage, setPwMessage] = useState("");

  // state 초기값 설정
  if (location.state === null) {
    location.state = "BUYER";
  }
  const loginType = location.state;

  // 로그인
  const login = async (e) => {
    e.preventDefault();

    try {
      const res = await API.post("/accounts/login/", {
        username: id,
        password: pw,
        login_type: loginType,
      });
      // console.log(res);
      localStorage.setItem("token", `JWT ${res.data.token}`);
      successLogin();
    } catch (error) {
      if (id === "") {
        setIdMessage("아이디를 입력해주세요.");
      } else if (pw === "") {
        setPwMessage("비밀번호를 입력해주세요.");
      } else {
        setPwMessage("아이디 또는 비밀번호가 일치하지 않습니다.");
        console.error(error);
      }
    }
  };

  // 로그인 성공 시 메인 페이지로 이동
  const successLogin = () => {
    navigate("/", {
      state: {
        loginType: loginType,
      },
    });
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
