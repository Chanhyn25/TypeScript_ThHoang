import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './Component/Header/Header'
import Shop from './pages/shop'
import Resgiter from './pages/Resgiter'
import Login from './pages/Login'
import { useEffect, useState } from 'react'
import { set } from 'react-hook-form'
import { IProduct } from './interface/TProduct'
import Footer from './Component/footer/footer'
import ProductDetail from './pages/ProductDetail'


function App() {

  //props = properties các thuộc tính của component
  //sate = trạng thái của đata
  const [products, setProducts] = useState<IProduct[]>([]);
  //destructuring
  useEffect(() => {
    fetch ("http://localhost:3000/products")
    .then((res) => res.json())
    .then((data)=> {
      console.log(data);
      setProducts(data);
    })
  }, []);

  return (
    <>
     <Header/>
     {JSON.stringify(products)}
     <Routes>
        <Route index element= {<Shop products={products}/>}/>
        <Route path='/shop' element= {<Shop products={products}/>}/>
        <Route path='/shop/:id' element= {<ProductDetail/>}/>
        <Route path='/resgiter' element= {<Resgiter/>}/>
        <Route path='/login' element= {<Login/>}/>
        <Route path='*' element= {<div>404</div>}/>
     </Routes>
     <Footer/>
    </>
  )
}

export default App
