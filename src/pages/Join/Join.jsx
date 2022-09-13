import React from "react";
import styled from "styled-components";
import Header from "../../components/Header/Header";
import JoinForm from "../../components/Form/JoinForm/JoinForm";

export default function Join() {
  return (
    <Main>
      <h2 className="ir">회원가입 페이지</h2>
      <Header />
      <JoinForm />
    </Main>
  );
}

const Main = styled.section`
  width: 550px;
  margin: 100px auto;
`;
