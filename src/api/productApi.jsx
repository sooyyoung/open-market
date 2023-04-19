import API from "./api";

export const getProduct = async (productId) => {
    try {
        const res = await API.get(`/products/${productId}/`);
        return res.data;
    } catch (error) {
        return error;
    }
}

export const getProductList = async (page) => {
    try {
        const res = await API.get(`/products/?page=${page}`);
        return res.data.results;
    } catch (error) {
        return error;
    }
}

export const searchProduct = async (keyword) => {
    try {
        const res = await API.get(`/products/?search=${keyword}`);
        return res.data.results;
    } catch (error) {
        return error;
    }
}