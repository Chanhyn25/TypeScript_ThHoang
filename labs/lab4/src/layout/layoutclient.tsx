import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addCard, getCards, getCardsById, removeCardById, updateCard,Card } from '../api/crads';
import Header from '../component/Header';
import Sidebar from '../component/Sidebar';
import ProductPage_client from '../pages/Client/products';
import CardPage from '../pages/Client/card';
import CardEditPage from '../pages/Client/card-edit';
import { getProducts, getProductsById, Product } from '../api/product';

const LayoutClient: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]); // Sử dụng kiểu any tạm thời cho products
  const [cards, setCards] = useState<Card[]>([]); // Sử dụng kiểu Card cho cards

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProducts();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
    fetchProducts();
  }, []);

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const data = await getCards();
        setCards(data);
      } catch (error) {
        console.error('Error fetching cards:', error);
      }
    };
    fetchCards();
  }, []);

  const onHandleAddCards = async (id: number) => {
    try {
      const checkCards: Product | undefined = await getCardsById(id);
      if (checkCards && 'quality' in checkCards) {
        checkCards.quality = checkCards.quality + 1;
        await updateCard(checkCards);
        const newCards = cards.map((item) => (item.id === checkCards.id ? checkCards : item));
        setCards(newCards);
      } else {
        const product = await getProductsById(id);
        await addCard(product);
        setCards(prevCards => [...prevCards, product]); // Sử dụng cập nhật chức năng
      }
      toast.success('Sản phẩm được thêm vào giỏ hàng thành công');
    } catch (error) {
      console.error('Error adding product to cart:', error);
      toast.error('Có lỗi xảy ra khi xử lý sản phẩm hoặc thêm vào giỏ hàng');
    }
  };
  
  


  const onHandleRemoveCard = async (id: number) => {
    const confirmRemove = window.confirm('Are you sure you want to remove?');
    if (confirmRemove) {
      try {
        await removeCardById(id);
        toast.success('Xóa sản phẩm thành công');
        setCards((prevCards) => prevCards.filter((card) => card.id !== id));
      } catch (error) {
        console.error('Error removing product:', error);
        toast.error('Lỗi khi xóa sản phẩm');
      }
    }
  };

  const onUpdaleCard = async (card: Card) => {
    try {
      await updateCard(card);
      toast.success('Cập nhật sản phẩm thành công');
      const newCards = cards.map((item) => (item.id === card.id ? card : item));
      setCards(newCards);
    } catch (error) {
      console.error('Error updating card:', error);
      toast.error('Lỗi khi cập nhật sản phẩm');
    }
  };

  return (
    <>
      <div>
        <Header />
        <div className="container-fluid">
          <div className="row">
            <Sidebar />
            <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
              <Routes>
                <Route index element={<ProductPage_client products={products} onAddCard={onHandleAddCards} />} />
                <Route path='products' element={<ProductPage_client products={products} onAddCard={onHandleAddCards} />} />
                <Route path='cards' element={<CardPage cards={cards} onRemoveCard={onHandleRemoveCard} />} />
                <Route path='cards/:id/edit' element={<CardEditPage onUpdaleCard={onUpdaleCard} />} />
              </Routes>
            </main>
          </div>
        </div>
        <ToastContainer />
      </div>
    </>
  );
};

export default LayoutClient;
