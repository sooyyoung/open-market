import styled from "styled-components";

export const Container = styled.section`
  max-width: 1280px;
  height: 600px;
  margin: 80px auto 0;
  display: flex;
  img {
    width: 600px;
    height: 600px;
    border: 1px solid #c4c4c4;
  }
`;

export const Details = styled.section`
  width: 100%;
  height: 600px;
  margin-left: 50px;
`;

export const ProductInfo = styled.section`
  font-size: 18px;
  border-bottom: 2px solid #c4c4c4;
  span {
    display: block;
    margin-bottom: 15px;
    color: #767676;
  }
  p {
    margin-bottom: 20px;
    font-size: 36px;
  }
  strong {
    font-size: 36px;
  }
  .delivery {
    margin: 130px 0 20px;
    font-size: 16px;
  }
`;

export const AmountBtn = styled.section`
  width: 150px;
  height: 50px;
  margin: 30px 0;
  display: flex;
  justify-content: space-between;
  border: 1px solid #c4c4c4;
  border-radius: 5px;
  line-height: 45px;
  overflow: hidden;
  button {
    width: 50px;
    font-size: 20px;
    &.minus {
      border-right: 1px solid #c4c4c4;
    }
    &.plus {
      border-left: 1px solid #c4c4c4;
    }
  }
  span {
    color: #000;
  }
`;

export const ProductPrice = styled.section`
  padding-top: 40px;
  display: flex;
  border-top: 2px solid #c4c4c4;
  font-size: 18px;
  p {
    font-weight: bold;
    margin-right: auto;
  }
  span {
    color: #767676;
  }
  .verticalBar {
    margin: 0 12px;
    color: #c4c4c4;
  }
  strong {
    font-size: 36px;
    color: #007aff;
    line-height: 20px;
    margin-bottom: 30px;
  }
`;

export const Button = styled.button`
  height: 60px;
  font-size: 18px;
  font-weight: bold;
  border-radius: 5px;
  ${(props) => {
    if (props.BuyBtn) {
      return `width: 415px; 
      background-color: #007aff;
      color: #fff;`;
    }
    if (props.CartBtn) {
      return `width: 200px;
      float: right;
      background-color: #767676;
      color: #fff;`;
    }
  }}
`;
