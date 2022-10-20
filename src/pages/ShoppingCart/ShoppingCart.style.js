import styled from "styled-components";

export const Container = styled.section`
  max-width: 1280px;
  margin: 50px auto 0;
  h2 {
    text-align: center;
  }
  .notice {
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
  }
`;

export const Tab = styled.table`
  width: 100%;
  height: 60px;
  margin-top: 50px;
  border-radius: 10px;
  background-color: #f2f2f2;
  font-size: 18px;
  vertical-align: middle;
  input[type="checkbox"] {
    width: 18px;
    height: 18px;
    vertical-align: middle;
  }
`;
