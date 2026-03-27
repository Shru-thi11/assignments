const BASE_URL = 'https://fakestoreapi.com';

export const getProducts = () => fetch(`${BASE_URL}/products`).then(res => res.json());

export const getProduct = (id) => fetch(`${BASE_URL}/products/${id}`).then(res => res.json());

export const createProduct = (data) => 
    fetch(`${BASE_URL}/products`, {
        method: "POST",
        body: JSON.stringify(data)
    }).then(res => res.json());

export const updateProduct = (id, data) => 
    fetch(`${BASE_URL}/products/${id}`, {
        method: "PUT",
        body: JSON.stringify(data)
    }).then(res => res.json());

export const deleteProduct = (id) => 
    fetch(`${BASE_URL}/products/${id}`, {
        method: "DELETE"
    }).then(res => res.json());