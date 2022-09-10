import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import shoppingCartIcon from "../../assets/shopping-cart.svg";
import userIcon from "../../assets/user.svg";
import { Header, Inner, H1, Search, NavBtn } from "./Nav.style";

export default function Nav() {
  return (
    <Header>
      <Inner>
        <H1>
          <Link to="/">
            <img src={logo} alt="오픈마켓 로고" />
          </Link>
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
