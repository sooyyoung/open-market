import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../../assets/logo.png";
import searchIcon from "../../assets/search.svg";
import shoppingCartIcon from "../../assets/shopping-cart.svg";
import userIcon from "../../assets/user.svg";

export default function Nav() {
  return (
    <Header>
      <Inner>
        <H1>
          <img src={logo} alt="Open Market" />
        </H1>
        <Search>
          <input type="text" placeholder="상품을 검색해보세요!" />
          <button className="searchIcon">
            <span className="ir">검색하기</span>
          </button>
        </Search>
        <NavBtn className="cartBtn">
          <img src={shoppingCartIcon} alt="장바구니" />
          <span>장바구니</span>
        </NavBtn>
        <Link to="/login">
          <NavBtn className="userBtn">
            <img src={userIcon} alt="마이페이지" />
            <span>로그인</span>
          </NavBtn>
        </Link>
      </Inner>
    </Header>
  );
}

const Header = styled.header`
  position: relative;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.1);
`;

const Inner = styled.div`
  width: 1280px;
  height: 90px;
  margin: 0 auto;
  padding: 22px 0;
  display: flex;
`;

const H1 = styled.h1`
  img {
    height: 50px;
    margin-right: 25px;
  }
`;

const Search = styled.div`
  width: 380px;
  height: 50px;
  display: flex;
  align-items: center;
  border: 2px solid royalblue;
  border-radius: 50px;
  overflow: hidden;
  input {
    padding: 12px 22px;
    font-size: 16px;
    &:focus {
      outline: none;
    }
  }
  .searchIcon {
    width: 26px;
    height: 26px;
    margin: 0 16px 0 auto;
    background: url(${searchIcon}) no-repeat;
  }
`;

const NavBtn = styled.button`
  width: 55px;
  height: 50px;
  &.cartBtn {
    margin-left: auto;
  }
  &.userBtn {
    margin: 0 0 auto 15px;
  }
  span {
    margin-top: 1px;
    display: block;
    font-size: 12px;
    color: #767676;
  }
`;
