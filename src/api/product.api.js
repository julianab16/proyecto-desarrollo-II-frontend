import API from "./http";

export const getProducts = () => API.get("/product/");
export const getProductById = (id) => API.get(`/product/${id}/`);
//export const createProduct = (data) => API.post("/product/", data);
//export const updateProduct = (id, data) => API.put(`/product/${id}/`, data);