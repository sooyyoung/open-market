import React from "react";
import IconInsta from "../../assets/icon-insta.svg";
import IconFacebook from "../../assets/icon-facebook.svg";
import IconYoutube from "../../assets/icon-youtube.svg";
import { Container, Inner, FooterNav, Sns, FooterInfo } from "./Footer.style";

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

          <Sns>
            <li>
              <img src={IconInsta} alt="인스타그램" />
            </li>
            <li>
              <img src={IconFacebook} alt="페이스북" />
            </li>
            <li>
              <img src={IconYoutube} alt="유튜브" />
            </li>
          </Sns>

          <FooterInfo>
            (주)OPEN-MARKET <br />
            서울특별시 00구 000동 000로 <br />
            사업자 번호 : 000-0000-0000 | 통신판매업 <br />
            대표 : 000
          </FooterInfo>
        </Inner>
      </Container>
    </>
  );
}
