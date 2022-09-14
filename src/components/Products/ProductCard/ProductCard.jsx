import React from "react";
import { Container, Product } from "./ProductCard.style";

export default function ProductCard() {
  return (
    <>
      <Container>
        <Product>
          <img src="" alt="" />
          <span>00 마켓</span>
          <p>0000 0000</p>
          <strong>00,000</strong>원
        </Product>
        <Product>
          <img src="" alt="" />
          <span>00 마켓</span>
          <p>0000 0000</p>
          <strong>00,000</strong>원
        </Product>
        <Product>
          <img src="" alt="" />
          <span>00 마켓</span>
          <p>0000 0000</p>
          <strong>00,000</strong>원
        </Product>
      </Container>
    </>
  );
}
