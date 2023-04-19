import API from "./api";

export const getCart = async () => {
    try {
        const res = await API.get("/cart/", {
            headers: {
                Authorization: window.localStorage.getItem("token"),
            },
        });
        return res.data.results;
    } catch (error) {
        return error;
    }
}

export const postCart = async (productId, quantity, soldout) => {
    try {
        const res = await API.post("/cart/", {
            product_id: productId, 
            quantity: quantity,
            check : soldout
        }, {
            headers: {
                Authorization: window.localStorage.getItem("token"),
            }
        });
        return res.data;
    } catch (error) {
        return error;
    }
}

export const deleteItemAll = async () => {
    try {
        await API.delete(`/cart/`, {
            headers: {
                Authorization: window.localStorage.getItem("token"),
            }
        });
    } catch (error) {
        return error;
    }
}

export const deleteItem = async (cartItemId) => {
    try {
        await API.delete(`/cart/${cartItemId}`, {
            headers: {
                Authorization: window.localStorage.getItem("token"),
            }
        });
    } catch (error) {
        return error;
    }
}

export const editQuantity = async (cartItemId, productId, quantity, is_active) => {
    try {
        await API.put(`/cart/${cartItemId}/`, {
            product_id: productId, 
            quantity: quantity,
            is_active : is_active
        }, {
            headers: {
                Authorization: window.localStorage.getItem("token"),
            }
        });
    } catch (error) {
        return error;
    }
}