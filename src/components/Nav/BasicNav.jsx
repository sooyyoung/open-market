import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../../assets/logo.png";

export default function BasicNav() {
  return (
    <Header>
      <Inner>
        <Link to="/">
          <img src={logo} alt="오픈마켓 로고" />
        </Link>
        <p>판매자 센터</p>
      </Inner>
    </Header>
  );
}

const Header = styled.header`
  position: relative;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.1);
`;

const Inner = styled.div`
  height: 90px;
  padding: 30px 100px;
  img {
    height: 36px;
  }
  p {
    display: inline-block;
    margin-left: 25px;
    font-size: 30px;
    font-weight: bold;
    vertical-align: top;
  }
`;
