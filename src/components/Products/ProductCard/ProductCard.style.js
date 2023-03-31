import styled from "styled-components";

export const Container = styled.section`
  max-width: 1280px;
  margin: 80px auto 180px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 70px;
`;

export const Product = styled.div`
  width: 380px;
  img {
    width: 380px;
    height: 380px;
    margin-bottom: 15px;
    border: 1px solid #c4c4c4;
    border-radius: 10px;
    cursor: pointer;
  }
  p {
    display: inline-block;
    margin: 6px 0 8px;
    font-size: 18px;
  }
  span {
    display: block;
    color: #767676;
  }
  strong {
    font-size: 24px;
  }
  .price {
    color: #000;
  }
`;
