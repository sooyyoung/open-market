import React, { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import API from "../../api/api";
import ProductCard from "../../components/Products/ProductCard/ProductCard"

export default function ProductList() {
    const [products, setProducts] = useState([]);
    const [page, setPage] = useState(0);
    const observer = useRef();
    const location = useLocation();
    const keyword = decodeURI(location.search).split("=")[1];

    useEffect(() => {
        if (page === 0) return
        if (keyword) {
            searchProduct();
        } else {
            getProductList(page);
        }
    }, [page, keyword]);

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

    const searchProduct = async () => {
        try {
            const res = await API.get(`/products/?search=${keyword}`);
            setProducts(res.data.results);
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <ProductCard 
            products={products} 
            observer={observer}
        />
    )
}