import { useEffect, useState } from 'react'
import './App.css'
import { addProduct, getAllProduct, updateProduct } from './api/product';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProductPage from './pages/Component/Product';
import ProductDetailPage from './pages/Component/ProductDetail';
import AdminLayout from './pages/layouts/AdminLayout';
import Dashboard from './pages/admin/Dashboard';
import ProductManagerPage from './pages/admin/ProductManage';
import AddProductPage from './pages/admin/AddProduct';
import UpdateProduct from './pages/admin/UpdateProduct';
import WebsiteLayout from './pages/layouts/WebsiteLayout';
import SignUp from './pages/Component/signup';
import Signin from './pages/Component/signin';
import Hompage from './pages/Component/Hompage';
import { IProduct } from './types/product';

function App() {
  const [products, setProduct] = useState<IProduct[]>([]);
  useEffect(() => {
    getAllProduct().then(({ data }) => setProduct(data));
  }, []);

  const onHandleRemove = (id) => {
    fetch('http://localhost:3000/products/' + id, {
      method: 'DELETE',
    }).then(() => setProduct(products.filter((item) => item.id != id)));
  };
  const onHandleAdd = (product) => {
    addProduct(product).then(() => {
      getAllProduct().then(({ data }) => setProduct(data));
    });
  };
  const onHandleUpdate = (product) => {
    updateProduct(product).then(() =>
      setProduct(
        products.map((item) => (item.id == product.id ? product : item))
      )
    );
  };
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<WebsiteLayout />}>
            <Route index element={<Hompage />} />
            <Route path='signup' element={<SignUp />} />
            <Route path='signin' element={<Signin />} />

            <Route path='products'>
              <Route
                index
                element={
                  <ProductPage products={products} onRemove={onHandleRemove} />
                }
              />
              <Route
                path=':id'
                element={<ProductDetailPage products={products} />}
              />
            </Route>
          </Route>

          <Route path='/admin' element={<AdminLayout />}>
            <Route index element={<Dashboard />} />
            <Route path='products'>
              <Route
                index
                element={
                  <ProductManagerPage
                    products={products}
                    onRemove={onHandleRemove}
                  />
                }
              />
              <Route
                path='add'
                element={<AddProductPage onAdd={onHandleAdd} />}
              />
              <Route
                path=':id/update'
                element={
                  <UpdateProduct
                    onUpdate={onHandleUpdate}
                    products={products}
                  />
                }
              />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App
