import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import {  useNavigate,  useParams } from 'react-router-dom';
import { getProductsById } from '../../api/product';

interface ProductFormData {
  name: string;
  image: string;
  price: number;
  description: string;
}

const ProductEditPage: React.FC<{ onUpdate: (data: ProductFormData) => void }> = ({ onUpdate }) => {
  const { id } = useParams();
  const { register, handleSubmit, reset } = useForm<ProductFormData>();
  const navigate = useNavigate(); // Sử dụng hook useNavigate để nhận navigate
  
  useEffect(() => {
    const fetchData = async () => {
      if (!id) return; // Kiểm tra xem id có tồn tại không
      try {
        const productId = Number(id); // Chuyển đổi id thành một số
        const data = await getProductsById(productId);
        reset(data); 
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    };
  
    fetchData();
  }, [id, reset]);
  const onSubmit = (data: ProductFormData) => {
    onUpdate(data);
    navigate('/admin/products'); // Sử dụng navigate để điều hướng đến địa chỉ mới
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 className="h2">Cập nhật sản phẩm</h1>
      </div>
      <div className="mb-3 mt-5">
        <label htmlFor="productName" className="form-label">
          Tên sản phẩm
        </label>
        <input type="text" {...register("name")} id="productName" className="form-control" />
      </div>
      <div className="mb-3 ">
        <label htmlFor="productImage" className="form-label">
          Ảnh sản phẩm
        </label>
        <input type="text" {...register("image")} id="productImage" className="form-control" />
      </div>
      <div className="mb-3 ">
        <label htmlFor="productPrice" className="form-label">
          Giá sản phẩm
        </label>
        <input type="number" {...register("price")} id="productPrice" className="form-control" />
      </div>
      <div className="mb-3 mt-5">
        <label htmlFor="productDesc" className="form-label">
          Mô tả
        </label>
        <textarea className="form-control" {...register("description")} id="productDesc" cols={30} rows={10}></textarea>
      </div>
      <button type="submit" className="btn btn-primary">
        Cập nhật
      </button>
    </form>
  );
};

export default ProductEditPage;
