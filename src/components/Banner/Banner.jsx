import React from "react";
import Prev from "../../assets/swiper-1.svg";
import Next from "../../assets/swiper-2.svg";
import { Container } from "./Banner.style";

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
