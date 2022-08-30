import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../../assets/logo.png";

export default function Header() {
  return (
    <Logo>
      <Link to="/">
        <img src={logo} alt="오픈마켓 로고" />
      </Link>
    </Logo>
  );
}

const Logo = styled.header`
  img {
    height: 55px;
    display: block;
    margin: 0 auto 60px;
  }
`;
