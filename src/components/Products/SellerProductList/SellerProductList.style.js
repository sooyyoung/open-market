import styled from "styled-components";

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