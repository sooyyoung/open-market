import styled from "styled-components";

export const Container = styled.section`
  max-width: 1280px;
  margin: 50px auto 0;
  h2 {
    text-align: center;
  }
  input[type="checkbox"] {
    width: 18px;
    height: 18px;
  }
`;

export const Tab = styled.div`
  width: 100%;
  height: 60px;
  margin: 50px 0 35px;
  display: flex;
  justify-content: space-between;
  padding: 0 130px 0 30px;
  border-radius: 10px;
  background-color: #f2f2f2;
  font-size: 18px;
  line-height: 60px;
`;

export const Notice = styled.div`
  margin-top: 200px;
  text-align: center;
  p {
    font-size: 18px;
    font-weight: bold;
  }
  span {
    font-size: 14px;
    color: #767676;
  }
`;

export const CartPrice = styled.div`
  width: 100%;
  height: 150px;
  margin: 80px 0 40px;
  padding: 50px 110px;
  background: #f2f2f2;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  img {
    width: 20px;
    height: 20px;
    background-color: #fff;
    border-radius: 50%;
    border: 5px solid #fff;
  }
  strong {
    display: block;
    font-size: 18px;
    margin-top: 5px;
  }
  .price {
    font-size: 26px;
    color: #007aff;
  }
`;

export const PaymentBtn = styled.button`
  width: 200px;
  height: 65px;
  border-radius: 5px;
  background-color: #007aff;
  color: #fff;
  font-size: 20px;
  margin: 0 auto 50px;
  display: block;
`;
