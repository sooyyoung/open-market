import styled from "styled-components";
import uploadImg from "../../assets/icon-img.svg";

export const Main = styled.section`
  padding: 45px 100px;
  strong {
    font-size: 36px;
  }
`;

export const Dashboard = styled.section`
  width: 100%;
  margin-top: 45px;
  display: flex;
`;

export const Notice = styled.div`
  margin-right: 30px;
  p {
    font-size: 16px;
    font-weight: 500;
    color: #EB5757;
    margin-bottom: 10px;
  }
  div {
    width: 280px;
    padding: 20px;
    border-radius: 5px;
    background-color: #FFEFE8;
    font-size: 14px;
  }
`;

export const Container = styled.section`
  width: 100%;
  > div {
    display: flex;
    margin-bottom: 40px;
  }
  p {
    color: #767676;
    margin-bottom: 6px;
  }
  span {
    margin-left: 6px;
    color: #767676;
  }
  .imgBox {
    width: 450px;
    height: 450px;
    margin-right: 30px;
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        background: url(${uploadImg}) no-repeat center #C4C4C4;
    }
  }
  .infoBox {
    width: calc(100% - 455px);
  }
  input {
    width: 220px;
    height: 54px;
    padding: 15px;
    border: 1px solid #C4C4C4;
    border-radius: 5px;
    margin-bottom: 15px;
  }
  button {
    width: 200px;
    height: 54px;
    border: 1px solid #C4C4C4;
    border-radius: 5px;
    margin: 0 10px 15px 0;
  }
  .detailBox {
    width: 100%;
    display: block;
    .edit {
        height: 200px;
        padding: 10px;
        background: #F2F2F2;
        border: 1px solid #C4C4C4;
        border-radius: 5px;
    }
    textarea {
        width: 100%;
        height: 100%;
        background: #F2F2F2;
        border: none;
        resize: none;
        font-size: 16px;
    }
  }
  .btn {
    float: right;
    button {
        &:last-child {
            background-color: royalblue;
            color: #fff;
            margin-right: 0;
        }
    }
  }
`