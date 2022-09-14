import styled from "styled-components";

export const Container = styled.section`
  max-width: 1280px;
  margin: 80px auto 180px;
  display: flex;
  gap: 70px;
  justify-content: space-evenly;
  flex-wrap: wrap;
`;

export const Product = styled.div`
  width: 380px;
  img {
    width: 380px;
    height: 380px;
    margin-bottom: 15px;
    border: 1px solid #c4c4c4;
    border-radius: 10px;
  }
  span {
    display: block;
    margin-bottom: 5px;
    color: #767676;
    font-size: 16px;
  }
  p {
    margin-bottom: 10px;
    font-size: 18px;
  }
  strong {
    font-size: 24px;
  }
`;
