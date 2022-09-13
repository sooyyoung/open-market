import React from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/logo.png";
import shoppingCartIcon from "../../assets/shopping-cart.svg";
import shoppingBagIcon from "../../assets/shopping-bag.svg";
import userIcon from "../../assets/user.svg";
import { Header, Inner, H1, Search, NavBtn } from "./Nav.style";

export default function Nav() {
  const location = useLocation();
  const loginType = location.state;

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
        {loginType ? (
          loginType.loginType === "BUYER" ? (
            <Link to="/myPage">
              <NavBtn className="userBtn">
                <img src={userIcon} alt="마이페이지" />
                <span>마이페이지</span>
              </NavBtn>
            </Link>
          ) : (
            <Link to="/sellerCenter">
              <NavBtn className="sellerBtn">
                <img src={shoppingBagIcon} alt="판매자 센터" />
                <span>판매자 센터</span>
              </NavBtn>
            </Link>
          )
        ) : (
          <Link to="/login">
            <NavBtn className="userBtn">
              <img src={userIcon} alt="로그인" />
              <span>로그인</span>
            </NavBtn>
          </Link>
        )}
      </Inner>
    </Header>
  );
}
