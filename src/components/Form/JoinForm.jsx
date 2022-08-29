import React, { useState } from "react";
import styled from "styled-components";
import FormHeader from "./FormHeader";
import icon from "../../assets/check-off.svg";

export default function JoinForm() {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const [pwCheck, setPwCheck] = useState("");
  const [name, setName] = useState("");
  const [phoneNum, setPhoneNum] = useState("");

  return (
    <JoinContainer>
      <FormHeader buyer="구매회원가입" seller="판매회원가입" />
      <form>
        <label htmlFor="id">아이디</label>
        <input
          type="text"
          id="id"
          className="id"
          required
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
        <button className="idCheck" type="button">
          중복확인
        </button>

        <label htmlFor="pw">비밀번호</label>
        <input
          type="password"
          id="pw"
          className="pw"
          required
          value={pw}
          onChange={(e) => setPw(e.target.value)}
        />

        <label htmlFor="pwCheck">비밀번호 재확인</label>
        <input
          type="password"
          id="pwCheck"
          className="pw"
          required
          value={pwCheck}
          onChange={(e) => setPwCheck(e.target.value)}
        />

        <label htmlFor="name">이름</label>
        <input
          type="text"
          id="name"
          className="name"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label htmlFor="phoneNum">휴대폰번호</label>
        <input
          type="text"
          id="phoneNum"
          className="phoneNum"
          required
          value={phoneNum}
          onChange={(e) => setPhoneNum(e.target.value)}
        />
        <input type="text" className="phoneNum" />
        <input type="text" className="phoneNum" />

        <label htmlFor="email">이메일</label>
        <input type="text" id="email" className="email" />
        <span className="at">@</span>
        <input type="text" className="email" />

        <AcceptCheck>
          <input type="checkbox" id="acceptCheck" className="acceptCheck" />
          <label htmlFor="acceptCheck">
            <strong>
              <u>이용약관</u>
            </strong>{" "}
            및{" "}
            <strong>
              <u>개인정보처리방침</u>
            </strong>
            에 대한 내용을 확인하였고 동의합니다.
          </label>
        </AcceptCheck>

        <JoinBtn type="submit">가입하기</JoinBtn>
      </form>
    </JoinContainer>
  );
}

const JoinContainer = styled.section`
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
      background: url(${icon}) no-repeat right;
      background-position: right 15px center;
    }
    .idCheck {
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

const AcceptCheck = styled.section`
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

const JoinBtn = styled.button`
  width: 480px;
  height: 60px;
  margin: 0 auto;
  display: block;
  background-color: #c4c4c4;
  border-radius: 5px;
  color: #fff;
`;
