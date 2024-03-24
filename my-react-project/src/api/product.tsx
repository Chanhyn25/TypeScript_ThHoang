import { IProduct } from "../types/product";
import intance from "./intance";

const getAllProduct = () => {
    return intance.get('/products');
};
const getOneProduct = (id:number) => {
    return intance.get('/products/');
};
const addProduct= (product: IProduct)=> {
    return intance.post('/products', product);
};
const updateProduct = (product: IProduct) => {
    return intance.put('/products/'+ product.id, product);
};
const deleteProduct = (id:number) => {
    return intance.delete('/products/' +id);
};

export {
    getAllProduct,
    getOneProduct,
    addProduct,
    updateProduct,
    deleteProduct
};