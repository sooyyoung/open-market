import React, { useState } from "react";
import API from "../../api/api";
import styled from "styled-components";
import FormHeader from "./FormHeader";
import checkOff from "../../assets/check-off.svg";
import checkOn from "../../assets/check-on.svg";

export default function JoinForm() {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const [pwCheck, setPwCheck] = useState("");
  const [name, setName] = useState("");
  const [phone1, setPhone1] = useState("");
  const [phone2, setPhone2] = useState("");
  const [phone3, setPhone3] = useState("");
  const [phoneNum, setPhoneNum] = useState("");

  // fail or success 메시지
  const [idMessage, setIdMessage] = useState("");
  const [pwMessage, setPwMessage] = useState("");
  const [pwCheckMessage, setPwCheckMessage] = useState("");
  const [phoneNumMessage, setPhoneNumMessage] = useState("");

  // 유효성 검사
  const [isId, setIsId] = useState(false);
  const [isPw, setIsPw] = useState(false);
  const [isPwCheck, setIsPwCheck] = useState(false);
  const [acceptCheckBox, setAcceptCheckBox] = useState(false);

  // 아이디 중복확인
  const handleCheckId = async () => {
    const regExp = /^[a-zA-z0-9]{1,20}$/;
    const resultId = regExp.test(id);

    try {
      const res = await API.post("accounts/signup/valid/", { username: id });
      if (res.status === 202) {
        setIdMessage("멋진 아이디네요 :)");
        setIsId(true);
      }
    } catch (error) {
      console.error(error);
      setIdMessage("이미 사용 중인 아이디입니다.");
      setIsId(false);
    }

    if (id === "") {
      setIdMessage("아이디를 입력해주세요.");
      setIsId(false);
    } else if (resultId === false) {
      setIdMessage("아이디는 20자 이하의 영어 대/소문자, 숫자만 가능합니다.");
      setIsId(false);
    }
  };

  // 비밀번호 확인
  const handleCheckPw = () => {
    const regExp = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    const resultPw = regExp.test(pw);

    if (pw.length < 8) {
      setPwMessage("비밀번호는 8자 이상이어야 합니다.");
      setIsPw(false);
    } else if (resultPw === false) {
      setPwMessage(
        "비밀번호는 한개 이상의 영소문자, 숫자가 필수적으로 들어가야 합니다."
      );
      setIsPw(false);
    } else {
      setIsPw(true);
    }
  };

  // 비밀번호 재확인
  const handleDoubleCheckPw = () => {
    if (pw !== pwCheck) {
      setPwCheckMessage("비밀번호가 일치하지 않습니다.");
      setIsPwCheck(false);
    } else {
      setIsPwCheck(true);
    }
  };

  // 휴대폰번호 확인
  const handleCheckPhoneNum = () => {
    setPhoneNum(phone1 + phone2 + phone3);

    const regExp = /^01([0|1|6|7|8|9])?([0-9]{3,4})?([0-9]{4})$/;
    const resultPhoneNum = regExp.test(phoneNum);
    if (resultPhoneNum === false) {
      setPhoneNumMessage(
        "휴대폰번호는 01*으로 시작해야 하는 10~11자리 숫자여야 합니다."
      );
    }
  };

  // 이용약관 체크 박스 확인
  const handleClickAcceptCheck = () => {
    setAcceptCheckBox((acceptCheckBox) => !acceptCheckBox);
  };

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
          onChange={(e) => {
            setId(e.target.value);
            setIdMessage("");
          }}
        />
        <button className="idCheck" type="button" onClick={handleCheckId}>
          중복확인
        </button>
        <Message isId={isId}>{idMessage}</Message>

        <label htmlFor="pw">비밀번호</label>
        <input
          type="password"
          id="pw"
          className={isPw ? "pw checkOn" : "pw checkOff"}
          required
          value={pw}
          onChange={(e) => {
            setPw(e.target.value);
            setPwMessage("");
          }}
          onBlur={handleCheckPw}
        />
        <Message>{pwMessage}</Message>

        <label htmlFor="pwCheck">비밀번호 재확인</label>
        <input
          type="password"
          id="pwCheck"
          className={isPwCheck ? "pw checkOn" : "pw checkOff"}
          required
          value={pwCheck}
          onChange={(e) => {
            setPwCheck(e.target.value);
            setPwCheckMessage("");
          }}
          onBlur={handleDoubleCheckPw}
        />
        <Message>{pwCheckMessage}</Message>

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
          value={phone1}
          required
          maxLength="3"
          onChange={(e) => {
            setPhone1(e.target.value);
            setPhoneNumMessage("");
          }}
          onBlur={handleCheckPhoneNum}
        />
        <input
          type="text"
          className="phoneNum"
          value={phone2}
          required
          maxLength="4"
          onChange={(e) => {
            setPhone2(e.target.value);
            setPhoneNumMessage("");
          }}
          onBlur={handleCheckPhoneNum}
        />
        <input
          type="text"
          className="phoneNum"
          value={phone3}
          required
          maxLength="4"
          onChange={(e) => {
            setPhone3(e.target.value);
            setPhoneNumMessage("");
          }}
          onBlur={handleCheckPhoneNum}
        />
        <Message>{phoneNumMessage}</Message>

        <label htmlFor="email">이메일</label>
        <input type="text" id="email" className="email" />
        <span className="at">@</span>
        <input type="text" className="email" />

        <AcceptCheck>
          <input
            type="checkbox"
            id="acceptCheck"
            className="acceptCheck"
            onClick={handleClickAcceptCheck}
          />
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

        <JoinBtn
          type="submit"
          className={
            isId &&
            isPw &&
            isPwCheck &&
            name !== "" &&
            phone1 !== "" &&
            phone2 !== "" &&
            phone3 !== "" &&
            phoneNumMessage === "" &&
            acceptCheckBox
              ? "active"
              : "disabled"
          }
        >
          가입하기
        </JoinBtn>
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
      &.checkOn {
        background: url(${checkOn}) no-repeat right 15px center;
      }
      &.checkOff {
        background: url(${checkOff}) no-repeat right 15px center;
      }
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

const Message = styled.span`
  display: block;
  margin-top: 10px;
  font-size: 16px;
  color: ${(props) => (props.isId ? "#4169E1" : "#eb5757")};
`;
