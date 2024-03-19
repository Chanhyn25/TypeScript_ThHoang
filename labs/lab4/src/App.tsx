import React, { useEffect, useState } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { addProduct, getProducts, getProductsById, removeProductById, updateProduct } from './api/product';
import { getCards, getCardsById, removeCardById, updateCard, addCard } from './api/cards';
import { toast } from 'react-toastify';
import ProductAddPage from './pages/admin/product-add';
import ProductEditPage from './pages/admin/product-edit';
import Header from './component/Header';
import Sidebar from './component/Sidebar';
import DashboardPage from './pages/admin/Dashboard';
import { Login } from './login/login';
import LayoutClient from './layout/layoutclient';
import ProductPage_client from './pages/Client/products';
import CardPage from './pages/Client/card';
import CardEditPage from './pages/Client/card-edit';
import LayoutAdmin from './layout/layoutadmin';
import ProductPage from './pages/admin/Product';

function App() {
  const [products, setProducts] = useState([]);
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProducts();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    const fetchCards = async () => {
      try {
        const data = await getCards();
        setCards(data);
      } catch (error) {
        console.error('Error fetching cards:', error);
      }
    };

    fetchProducts();
    fetchCards();
  }, []);

  const onHandleRemove = async (id) => {
    const confirm = window.confirm('Are you sure you want to remove?');
    if (confirm) {
      try {
        await removeProductById(id);
        toast.success('Xóa sản phẩm thành công');
        setProducts((prevProducts) => prevProducts.filter((product) => product.id !== id));
      } catch (error) {
        toast.error('Lỗi rồi');
      }
    }
  };

  const onHandleAddCards = async (id) => {
    try {
      const checkCards = await getCardsById(id);
      if (checkCards) {
        checkCards.quality = checkCards.quality + 1;
        await updateCard(checkCards);
        const newProducts = cards.map((item) => (item.id === checkCards.id ? checkCards : item));
        setCards(newProducts);
      } else {
        const product = await getProductsById(id);
        await addCard(product);
        setCards([...cards, product]);
      }
      toast.success('Sản Phẩm thêm vào giỏ hàng thành công');
    } catch (error) {
      toast.error('Có lỗi xảy ra khi xử lý thẻ hoặc thêm sản phẩm vào giỏ hàng');
    }
  };

  const onHandleRemoveCard = async (id) => {
    const confirm = window.confirm('Are you sure you want to remove?');
    if (confirm) {
      try {
        await removeCardById(id);
        toast.success('Xóa sản phẩm thành công');
        setCards((prevCards) => prevCards.filter((card) => card.id !== id));
      } catch (error) {
        toast.error('Lỗi rồi');
      }
    }
  };

  const onUpdaleCard = async (card) => {
    try {
      await updateCard(card);
      toast.success('Cập nhật sản phẩm thành công');
      const newProducts = cards.map((item) => (item.id === card.id ? card : item));
      setCards(newProducts);
    } catch (error) {
      toast.error(error);
    }
  };

  const onHandleAdd = async (product) => {
    try {
      const data = await addProduct(product);
      toast.success('Thêm sản phẩm thành công');
      setProducts([...products, data]);
    } catch (error) {
      toast.error(error);
    }
  };

  const onHandleUpdate = async (product) => {
    try {
      const data = await updateProduct(product);
      toast.success('Cập nhật sản phẩm thành công');
      const newProducts = products.map((item) => (item.id === product.id ? product : item));
      setProducts(newProducts);
    } catch (error) {
      toast.error(error);
    }
  };

  return (
    <Routes>
      <Header />
      <Sidebar />
      <DashboardPage />
      <Route path="login" element={<Login />} />
      <Route path="/" element={<LayoutClient />}>
        <Route
          index
          element={<ProductPage_client products={products} onAddCard={onHandleAddCards} />}
        />
        <Route
          path="products"
          element={<ProductPage_client products={products} onAddCard={onHandleAddCards} />}
        />
        <Route
          path="cards"
          element={<CardPage cards={cards} onRemoveCard={onHandleRemoveCard} />}
        />
        <Route path="cards/:id/edit" element={<CardEditPage onUpdaleCard={onUpdaleCard} />} />
      </Route>
      <Route path="admin/" element={<LayoutAdmin />}>
        <Route
          index
          element={<ProductPage products={products} onRemove={onHandleRemove} />}
        />
        <Route
          path="products"
          element={<ProductPage products={products} onRemove={onHandleRemove} />}
        />
        <Route
          path="products/add"
          element={<ProductAddPage onAdd={onHandleAdd} />}
        />
        <Route
          path="products/:id/edit"
          element={<ProductEditPage onUpdate={onHandleUpdate} />}
        />
      </Route>
    </Routes>
  );
}

export default App;
