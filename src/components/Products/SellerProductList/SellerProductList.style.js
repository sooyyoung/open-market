import styled from "styled-components";

export const List = styled.tr`
  &.select {
    background-color: #f2f2f2;
  }
  &:last-child {
    border-bottom: none;
  }
  td.product {
    text-align: start;
    display: flex;
    align-items: center;
    vertical-align: middle;
    img {
        width: 70px;
        height: 70px;
        padding: 15px 30px;
        border-radius: 50%;
    }
    p {
        font-size: 18px;
        margin-bottom: 10px;
    }
    span {
        font-size: 16px;
        color: #767676;
    }
  }
  div {
    width: 90%;
  }
  input {
    display: block;
    padding: 5px;
    margin: 15px 0;
    background: #fff;
    border-bottom: 1px solid #767676;
    &.productName {
        width: 100%;
    }
    &.stock, &.price {
        display: inline-block;
        width: 30%;
    }
  }
  textarea {
    width: 100%;
    margin-top: 10px;
    padding: 5px;
    border: none;
    border-bottom: 1px solid #767676;
    resize: none;
    display: block;
   }
`

export const Button = styled.button`
  width: 80px;
  height: 40px;
  border-radius: 5px;
  ${(props) => {
    if (props.delete) {
      return `
        background-color: #fff; 
        border: 1px solid #767676;
      `;
    } else {
      return `
        background-color: royalblue; 
        color: #fff
      `;
    }
  }}
`;