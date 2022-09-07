import styled from "styled-components";
import checkOff from "../../../assets/check-off.svg";
import checkOn from "../../../assets/check-on.svg";

export const JoinContainer = styled.section`
  form {
    padding: 30px 35px 35px;
    border: 1px solid #c4c4c4;
    border-top: none;
    border-radius: 0 0 10px 10px;
    & > label {
      color: #767676;
      margin: 20px 0 10px;
      display: block;
    }
    & > input {
      width: 100%;
      height: 55px;
      padding-left: 15px;
      display: inline-block;
      border: 1px solid #c4c4c4;
      border-radius: 5px;
    }
    .id {
      width: 345px;
    }
    .pw {
      &.checkOn {
        background: url(${checkOn}) no-repeat right 15px center;
      }
      &.checkOff {
        background: url(${checkOff}) no-repeat right 15px center;
      }
    }
    .check {
      width: 120px;
      height: 55px;
      float: right;
      color: #fff;
      border-radius: 5px;
      background-color: royalblue;
    }
    .phoneNum {
      width: calc((100% - 24px) / 3);
    }
    .phoneNum + .phoneNum {
      margin-left: 12px;
    }
    .email {
      width: calc((100% - 35px) / 2);
    }
    .at {
      margin: 0 10px;
    }
  }
`;

export const AcceptCheck = styled.section`
  padding: 35px;
  font-size: 16px;
  color: #767676;
  input {
    width: 18px;
    height: 18px;
    margin-right: 12px;
  }
  label {
    vertical-align: top;
  }
`;

export const JoinBtn = styled.button`
  width: 480px;
  height: 60px;
  margin: 0 auto;
  display: block;
  border-radius: 5px;
  &.disabled {
    cursor: default;
    pointer-events: none;
    background: #c4c4c4;
    color: #fff;
  }

  &.active {
    background-color: #4169e1;
    color: #fff;
  }
`;

export const Message = styled.span`
  display: block;
  margin-top: 10px;
  font-size: 16px;
  color: ${(props) => (props.isId ? "#4169E1" : "#eb5757")};
`;
