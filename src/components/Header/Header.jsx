import React from "react";
import styled from "styled-components";
import logo from "../../assets/logo.png";

export default function Header() {
  return (
    <Logo>
      <span className="ir">open market</span>
    </Logo>
  );
}

const Logo = styled.header`
  padding-top: 100px;
  background: url(${logo}) top center no-repeat;
  background-size: 65%;
`;
