import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Header from "../components/Header/Header";
import LoginForm from "../components/Form/LoginForm/LoginForm";

export default function Login() {
  return (
    <Main>
      <h2 className="ir">로그인 페이지</h2>
      <Header />
      <LoginForm />
      <JoinFind>
        <Link to="/join" className="join">
          회원가입
        </Link>
        <Link to="" className="find">
          아이디/비밀번호 찾기
        </Link>
      </JoinFind>
    </Main>
  );
}

const Main = styled.section`
  width: 550px;
  margin: 100px auto;
`;

const JoinFind = styled.article`
  margin-top: 30px;
  text-align: center;
  .join {
    color: #333333;
    &::after {
      content: "|";
      margin: 0 15px;
    }
  }
`;
