import Item from 'antd/es/list/Item'
import React from 'react'
import { IProduct } from '../interface/TProduct'
import { Link } from 'react-router-dom';

type Props = {
    products: IProduct[];
}

const Shop: React.FC<Props>= ({products}) => {
  return (
    <div className='container'>
        <h1>Container</h1>
        {products.map((item)=> (
            <div key= {item.id} className='Product-card'>
                <Link to={`/shop/${item.id}`}></Link>
                <img src={item.thumbnail} alt={item.title} />
                <div className='product-content'>
                <Link to={`/shop/${item.id}`}>
                    <h2>{item.title}</h2>
                </Link>
                    <p>{item.price}</p>
                    <p>{item.description}</p>
                </div>
            </div>
        ))}
    </div>
  );
};

export default Shop;