import styled from "styled-components";

export const CartItem = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  padding: 20px 0;
  margin-bottom: 10px;
  border-radius: 10px;
  border: 2px solid #f2f2f2;
  position: relative;
  .checkbox {
    margin: 0 60px 0 30px;
    line-height: 140px;
    display: inline-block;
  }
  .image {
    width: 160px;
    height: 160px;
    object-fit: cover;
  }
`;

export const ItemInfo = styled.div`
  width: 380px;
  margin-left: 35px;
  span {
    font-size: 14px;
    color: #767676;
    display: inline-block;
    margin-bottom: 10px;
  }
  p {
    font-size: 18px;
    margin-bottom: 10px;
  }
  strong {
    display: block;
    margin-bottom: 40px;
  }
`;

export const AmountBtn = styled.section`
  width: 150px;
  height: 50px;
  margin: 45px 0;
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

export const ItemPrice = styled.div`
  width: 130px;
  margin-left: 220px;
  padding-top: 30px;
  strong {
    display: block;
    margin-bottom: 25px;
    font-size: 18px;
    color: #eb5757;
    text-align: center;
  }
  button {
    width: 130px;
    height: 40px;
    border-radius: 5px;
    background-color: #007aff;
    color: #fff;
  }
`;

export const DeleteBtn = styled.button`
  position: absolute;
  top: 15px;
  right: 15px;
`;