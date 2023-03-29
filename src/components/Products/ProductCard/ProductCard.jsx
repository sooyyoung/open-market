import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import API from "../../../api/api";
import { Container, Product } from "./ProductCard.style";

export default function ProductCard() {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(0);
  const observer = useRef();

  useEffect(() => {
    getProductList(page);
  }, [page]);

  useEffect(() => {
    if (!observer.current) return;
    const io = new IntersectionObserver(onIntersect, { threshold: 1 });
    io.observe(observer.current);
    return () => io && io.disconnect();
  }, [observer]);

  const onIntersect = (entries) => {
    const target = entries[0];
    if (target.isIntersecting) {
        setPage((p) => p + 1);
    }
  };

  const getProductList = async (page) => {
    try {
      const res = await API.get(`/products/?page=${page}`);
      setProducts([...products, ...res.data.results]);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Container>
        {products.map((item, index) => {
          return (
            <Product key={index}>
              <Link
                to={{
                  pathname: `/productDetails`,
                  search: `${item.product_id}`,
                }}
              >
                <img src={item.image} alt="" />
              </Link>
              <span>{item.store_name}</span>
              <p>{item.product_name}</p>
              <span className="price">
                <strong>{item.price.toLocaleString()}</strong>원
              </span>
            </Product>
          );
        })}
        <section ref={observer}></section>
      </Container>
    </>
  );
}
