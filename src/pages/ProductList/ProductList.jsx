import React, { useState, useEffect, useRef } from "react";
import API from "../../api/api";
import ProductCard from "../../components/Products/ProductCard/ProductCard"

export default function ProductList() {
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
        <ProductCard 
            products={products} 
            observer={observer}
        />
    )
}