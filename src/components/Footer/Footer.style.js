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
  display: inline-block;
  font-size: 14px;
  li {
    display: inline-block;
    vertical-align: middle;
    &::after {
      content: "|";
      margin: 0 14px;
    }
    &:last-child::after {
      content: "";
    }
  }
`;

export const Sns = styled.ul`
  display: flex;
  gap: 15px;
  float: right;
`;

export const FooterInfo = styled.div`
  margin-top: 30px;
  padding-top: 30px;
  border-top: 1px solid #c4c4c4;
  font-size: 14px;
  line-height: 24px;
  color: #767676;
`;
