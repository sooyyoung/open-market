import React, { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { getProductList, searchProduct } from "../../api/productApi";
import ProductCard from "../../components/Products/ProductCard/ProductCard"

export default function ProductList() {
    const [products, setProducts] = useState([]);
    const [page, setPage] = useState(0);
    const observer = useRef();
    const location = useLocation();
    const keyword = decodeURI(location.search).split("=")[1];

    useEffect(() => {
        if (page === 0) return;
        if (keyword) {
            searchProduct(keyword).then(res => {
                setProducts(res);
            });
        } else {
            getProductList(page).then(res => {
                setProducts([...products, ...res]);
            });
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

    return (
        <ProductCard 
            products={products} 
            observer={observer}
        />
    )
}