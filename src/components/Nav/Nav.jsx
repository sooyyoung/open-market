import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import { Header, Inner, H1, Search, NavBtn } from "./Nav.style";

export default function Nav() {
  const [keyword, setKeyword] = useState("");
  const loginType = localStorage.getItem("login_type");
  const pathname = window.location.pathname;
  const navigate = useNavigate();

  const logout = () => {
    window.localStorage.removeItem("login_type");
    window.localStorage.removeItem("token");
    window.location.reload();
  }

  const search = () => {
    navigate(`/?search=${keyword}`);
    setKeyword("");
  }

  return (
    <Header>
      <Inner>
        <H1>
          <Link to="/">
            <img src={logo} alt="오픈마켓 로고" />
          </Link>
        </H1>
        {pathname === "/sellerCenter" || pathname === "/productUpload" ? 
            ""
        :   <Search>
                <input 
                    type="text" 
                    value={keyword} 
                    onChange={(e) => setKeyword(e.target.value)}
                    placeholder="상품을 검색해보세요!"
                />
                <button className="searchIcon" onClick={search}>
                    <span className="ir">검색하기</span>
                </button>
            </Search>
        }
        {loginType ? (
            <>
                {loginType === "BUYER" ?  
                <NavBtn to="/shoppingCart" className="cartBtn">
                    <span>장바구니</span>
                </NavBtn>
           : 
                <>
                    {pathname !== "/sellerCenter" ? 
                        <NavBtn to="/sellerCenter" className="sellerBtn">
                            <span>판매자 센터</span>
                        </NavBtn> 
                    : ""
                    }
                </>
                }
                <NavBtn to="" className="userBtn" onClick={logout} pathname={pathname}>
                    <span>로그아웃</span>
                </NavBtn>
            </>
        ) : (
            <>
                <NavBtn to="/shoppingCart" className="cartBtn">
                    <span>장바구니</span>
                </NavBtn>
                <NavBtn to="/login" className="userBtn">
                    <span>로그인</span>
                </NavBtn>
            </>
        )}
      </Inner>
    </Header>
  );
}
