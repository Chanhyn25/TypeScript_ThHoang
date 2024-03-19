import React from 'react';

interface Product {
  id: number;
  name: string;
  image: string;
  price: number;
}

interface Props {
  products: Product[];
  onAddCard: (id: number) => void;
}

const ProductPage_client: React.FC<Props> = ({ products, onAddCard }) => {
  return (
    <>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 className="h2">Sản phẩm view client</h1>
      </div>
      <div className="row small">
        {products.map((product, index) => (
          <div key={index} className="card" style={{ width: '18rem' }}>
            <img src={product.image} className="card-img-top" alt={product.name} />
            <div className="card-body">
              <h5 className="card-title">{product.name}</h5>
              <p className="card-text">{product.price}</p>
              <button onClick={() => onAddCard(product.id)} className="btn btn-primary">Add to Card</button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default ProductPage_client;
