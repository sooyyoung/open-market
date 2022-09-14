import { Link } from "react-router-dom";
import styled from "styled-components";
import searchIcon from "../../assets/search.svg";
import shoppingCartIcon from "../../assets/shopping-cart.svg";
import shoppingBagIcon from "../../assets/shopping-bag.svg";
import userIcon from "../../assets/user.svg";

export const Header = styled.header`
  position: relative;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.1);
  z-index: 10;
`;

export const Inner = styled.div`
  max-width: 1280px;
  height: 90px;
  margin: 0 auto;
  padding: 22px 0;
  display: flex;
`;

export const H1 = styled.h1`
  img {
    height: 50px;
    margin: 0 22px;
  }
`;

export const Search = styled.div`
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

export const NavBtn = styled(Link)`
  width: 52px;
  height: 50px;
  text-align: center;
  span {
    display: block;
    margin-top: 36px;
    font-size: 12px;
    color: #767676;
  }
  &.cartBtn {
    margin-left: auto;
    background: url(${shoppingCartIcon}) no-repeat top;
  }
  &.userBtn {
    margin: 0 0 auto 25px;
    background: url(${userIcon}) no-repeat top;
  }
  &.sellerBtn {
    width: 158px;
    height: 50px;
    margin-left: 25px;
    border-radius: 5px;
    background: url(${shoppingBagIcon}) no-repeat 18px center royalblue;
    span {
      margin-top: 0;
      font-size: 16px;
      color: #fff;
      text-indent: 40px;
      line-height: 52px;
    }
  }
`;
