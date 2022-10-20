import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "./styles/GlobalStyle";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Join from "./pages/Join/Join";
import SellerCenter from "./pages/SellerCenter/SellerCenter";
import ShoppingCart from "./pages/ShoppingCart/ShoppingCart";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import ProductUpload from "./pages/ProductUpload/ProductUpload";
import NotFound from "./pages/NotFound/NotFound";

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/join" element={<Join />} />
          <Route path="/sellerCenter" element={<SellerCenter />} />
          <Route path="/shoppingCart" element={<ShoppingCart />} />
          <Route path="/productDetails" element={<ProductDetails />} />
          <Route path="/productUpload" element={<ProductUpload />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
