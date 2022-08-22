import React from "react";
import styled from "styled-components";
import Prev from "../../assets/swiper-1.svg";
import Next from "../../assets/swiper-2.svg";

export default function Banner() {
  return (
    <Container>
      <button>
        <img src={Prev} alt="" />
      </button>
      <button>
        <img src={Next} alt="" />
      </button>
    </Container>
  );
}

const Container = styled.section`
  width: 100%;
  height: 500px;
  background: #f2f2f2;
  display: flex;
  justify-content: space-between;
  button {
    padding: 0 20px;
  }
`;
