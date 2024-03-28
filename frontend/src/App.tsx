import { Route, Routes } from 'react-router-dom'
import './App.css'
import LayoutAdmin from './components/LayoutAdmin'
import ProductList from './components/ProductList'
import Signup from './components/Signup'
import Signin from './components/Signin'
import ProductAdd from './components/ProductAdd'
import ProductEdit from './components/ProductEdit'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<LayoutAdmin />}>
          <Route index element={<ProductList />} />
          <Route path='/products' element={<ProductList />} />
          <Route path='/products/add' element={<ProductAdd />} />
          <Route path='/products/:id/edit' element={<ProductEdit />} />
        </Route>
        <Route path='signup' element={<Signup />} />
        <Route path='signin' element={<Signin />} />
      </Routes>
    </>
  )
}

export default App
