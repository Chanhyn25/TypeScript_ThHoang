import React from 'react';
import { Link } from 'react-router-dom';

interface Product {
  id: number;
  name: string;
  image: string;
  price: number;
}

interface Props {
  products: Product[];
  onRemove: (id: number) => void;
}

const ProductPage: React.FC<Props> = ({ products, onRemove }) => {
  return (
    <>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 className="h2">Quản lý sản phẩm</h1>
        <div className="btn-toolbar mb-2 mb-md-0"></div>
      </div>
      <div className="table-responsive small">
        <table className="table table-striped table-sm">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Ảnh sản phẩm</th>
              <th scope="col">Tên sản phẩm</th>
              <th scope="col">Giá sản phẩm</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr key={product.id}>
                <td>{index + 1}</td>
                <td>
                  <img src={product.image} alt={product.name} width={50} />
                </td>
                <td>
                  <h4>{product.name}</h4>
                </td>
                <td>
                  <span>{product.price}</span>
                </td>
                <td>
                  <div className="d-flex">
                    <button className="btn btn-danger" onClick={() => onRemove(product.id)}>Xóa</button>
                    <Link to={`/admin/products/${product.id}/edit`} className="btn btn-primary ml-3">Cập nhật</Link>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ProductPage;
