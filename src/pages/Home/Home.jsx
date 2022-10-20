import React from "react";
import Nav from "../../components/Nav/Nav";
import Banner from "../../components/Banner/Banner";
import ProductCard from "../../components/Products/ProductCard/ProductCard";
import Footer from "../../components/Footer/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <Banner />
      <ProductCard />
      <Footer />
    </>
  );
}
