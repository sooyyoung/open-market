import React from "react";
import Nav from "../../components/Nav/Nav";
import Banner from "../../components/Banner/Banner";
import ProductList from "../ProductList/ProductList";
import Footer from "../../components/Footer/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <Banner />
      <ProductList />
      <Footer />
    </>
  );
}
