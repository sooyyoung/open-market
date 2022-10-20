import React from "react";
import { Container, Inner, FooterNav } from "./Footer.style";

export default function Footer() {
  return (
    <>
      <Container>
        <Inner>
          <FooterNav>
            <li>오픈마켓 소개</li>
            <li>이용약관</li>
            <li>개인정보처리방침</li>
            <li>전자금융거래약관</li>
            <li>제휴문의</li>
          </FooterNav>
        </Inner>
      </Container>
    </>
  );
}
