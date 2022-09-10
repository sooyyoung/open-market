import styled from "styled-components";
import searchIcon from "../../assets/search.svg";

export const Header = styled.header`
  position: relative;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.1);
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

export const NavBtn = styled.button`
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
