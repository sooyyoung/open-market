import styled from "styled-components";
import NotFoundIcon from "../../assets/404.svg";

export const Main = styled.section`
  width: 730px;
  height: 250px;
  margin: 300px auto 0;
  padding: 20px 0 0 320px;
  background: url(${NotFoundIcon}) no-repeat;
  strong {
    font-size: 36px;
    margin-bottom: 20px;
    display: block;
  }
  p {
    font-size: 16px;
    line-height: 20px;
    color: #767676;
    margin-bottom: 40px;
  }
  button {
    width: 190px;
    height: 60px;
    border-radius: 5px;
    &.goHome {
      background: royalblue;
      margin-right: 15px;
      color: #fff;
    }
    &.goPrevious {
      border: 1px solid #c4c4c4;
    }
  }
`;
