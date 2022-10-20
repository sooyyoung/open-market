import styled from "styled-components";

export const Container = styled.footer`
  height: 300px;
  background-color: #f2f2f2;
`;

export const Inner = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 60px 0;
`;

export const FooterNav = styled.ul`
  font-size: 14px;
  li {
    display: inline-block;
    &::after {
      content: "|";
      margin: 0 14px;
    }
    &:last-child::after {
      content: "";
    }
  }
`;
