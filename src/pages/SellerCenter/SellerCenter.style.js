import styled from "styled-components";
import plusIcon from "../../assets/plus.svg";

export const Main = styled.section`
  padding: 45px 100px;
  strong {
    font-size: 36px;
  }
`;

export const UploadBtn = styled.button`
  width: 168px;
  height: 54px;
  float: right;
  border-radius: 5px;
  background: url(${plusIcon}) no-repeat 18px center royalblue;
  color: #fff;
  font-size: 18px;
  text-indent: 35px;
`;

export const Dashboard = styled.section`
  width: 100%;
  margin-top: 45px;
  display: flex;
`;

export const TabMenu = styled.div`
  width: 250px;
  margin-right: 30px;
  div {
    width: 250px;
    height: 50px;
    padding: 15px 20px;
    border-radius: 5px;
    background-color: royalblue;
    color: #fff;
    font-size: 16px;
    text-align: start;
  }
`;

export const List = styled.section`
  width: 100%;
  height: 800px;
  border: 1px solid #c4c4c4;
  border-radius: 5px;
  background: #f2f2f2;

  table {
    width: 100%;
    tr {
      background-color: #fff;
      border-bottom: 1px solid #c4c4c4;
      text-align: center;
    }
    thead {
      height: 60px;
      font-size: 18px;
    }
    tbody tr {
      height: 100px;
    }
    td.product {
      text-align: start;
      padding: 22px 0 0 40px;
      display: flex;
      align-items: center;
      vertical-align: middle;
      img {
        margin-right: 30px;
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
  }
`;

export const Button = styled.button`
  width: 80px;
  height: 40px;
  border-radius: 5px;
  ${(props) => {
    if (props.modify) {
      return `
        background-color: royalblue; 
        color: #fff
      `;
    }
    if (props.delete) {
      return `border: 1px solid #767676;`;
    }
  }};
`;
