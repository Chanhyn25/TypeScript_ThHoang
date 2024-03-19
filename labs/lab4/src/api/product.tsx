import instance from "./confix";

export interface Product {
    id: number;
    name: string;
    price: number;
    description: string;
    quality: number;
    // Thêm các trường dữ liệu khác của sản phẩm tại đây nếu cần
}

export const getProducts = async (): Promise<Product[]> => {
    try {
        const { data } = await instance.get('/products');
        return data;
    } catch (error) {
        console.log(error);
        return [];
    }
};

export const getProductsById = async (id: number): Promise<Product | null> => {
    try {
        const { data } = await instance.get(`/products/${id}`);
        return data;
    } catch (error) {
        console.log(error);
        return null;
    }
};

export const removeProductById = async (id: number): Promise<boolean> => {
    try {
        await instance.delete(`/products/${id}`);
        return true;
    } catch (error) {
        console.log(error);
        return false;
    }
};

export const addProduct = async (product: Product): Promise<Product | null> => {
    try {
        const { data } = await instance.post('/products', product);
        return data;
    } catch (error) {
        console.log(error);
        return null;
    }
};

export const updateProduct = async (product: Product): Promise<Product | null> => {
    try {
        const { data } = await instance.put(`/products/${product.id}`, product);
        return data;
    } catch (error) {
        console.log(error);
        return null;
    }
};
