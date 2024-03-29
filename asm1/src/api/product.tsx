import { IProduct } from "../types/product";
import instance from "./instance";

const getAllProduct = () => {
    return instance.get('/products');
};

const getOneProduct = (id:number) => {
    return instance.get('/products/');
};

const addProduct = (product: IProduct) => {
    return instance.post('/products', product);
};

const updateProduct = (product: IProduct) => {
    return instance.put('/products/'+ product.id, product);
};

const deleteProduct = (id:number) => {
    return instance.delete('/products/'+ id);
};


export default {
    getAllProduct,
    getOneProduct,
    addProduct,
    updateProduct,
    deleteProduct
};


