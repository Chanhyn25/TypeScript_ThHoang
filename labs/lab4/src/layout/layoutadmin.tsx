import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addProduct, getProducts, removeProductById, updateProduct, Product } from '../api/product';
import Header from '../component/Header';
import ProductPage from '../pages/admin/Product';
import ProductAddPage from '../pages/admin/product-add';
import ProductEditPage from '../pages/admin/product-edit';
import SidebarAdmin from '../component/SidebarAdmin';

const LayoutAdmin: React.FC = () => {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getProducts();
                setProducts(data);
            } catch (error) {
                toast.error('Error fetching products');
            }
        };
        fetchData();
    }, []);

    const onHandleRemove = async (id: number) => {
        const confirm = window.confirm('Are you sure you want to remove');
        if (confirm) {
            try {
                await removeProductById(id);
                toast.success('Product removed successfully');
                // Rerender
                setProducts(products.filter(product => product.id !== id));
            } catch (error) {
                toast.error('Error removing product');
            }
        }
    };

    const onHandleAdd = async (product: Product) => {
        try {
            const data = await addProduct(product);
            if (data !== null) {
                toast.success('Product added successfully');
                // Rerender
                setProducts([...products, data]);
            } else {
                // Xử lý trường hợp null ở đây
                toast.error('Error: Received null data when adding product');
            }
        } catch (error) {
            toast.error('Error adding product');
        }
    };
    

    const onHandleUpdate = async (product: Product) => {
        try {
            const data = await updateProduct(product);
            if (data !== null) {
                toast.success('Product updated successfully');
                // Rerender
                const newProducts = products.map(item => (item.id === product.id ? product : item));
                setProducts(newProducts);
            } else {
                toast.error('Error updating product');
            }
        } catch (error) {
            toast.error('Error updating product');
        }
    };
    

    return (
        <>
            <div>
                <Header />
                <div className="container-fluid">
                    <div className="row">
                        <SidebarAdmin />
                        <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                            <Routes>
                                <Route index element={<ProductPage products={products} onRemove={onHandleRemove} />} />
                                <Route path="products" element={<ProductPage products={products} onRemove={onHandleRemove} />} />
                                <Route path='products/add' element={<ProductAddPage onAdd={onHandleAdd} />} />
                                <Route path='products/:id/edit' element={<ProductEditPage onUpdate={onHandleUpdate} />} />
                            </Routes>
                        </main>
                    </div>
                </div>
                <ToastContainer />
            </div>
        </>
    );
};

export default LayoutAdmin;
