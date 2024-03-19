import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import { getCardsById } from '../../api/crads';

interface Card {
  id: number;
  name: string;
  image: string;
  price: number;
  quality: number;
}

interface Props {
  onUpdaleCard: (card: Card) => void;
}

const CardEditPage: React.FC<Props> = ({ onUpdaleCard }) => {
  const { id } = useParams<{ id: string }>(); // Sử dụng useParams với kiểu dữ liệu của id là string
  const { register, handleSubmit, reset } = useForm<Card>();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getCardsById(Number(id));
        reset(data);
      } catch (error) {
        console.error('Error fetching card:', error);
      }
    };

    fetchData();
  }, [id, reset]);

  const onSubmit = (data: Card) => {
    onUpdaleCard(data);
    navigate('/cards');
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 className="h2">Cập nhật giỏ hàng</h1>
      </div>
      <div className="mb-3 mt-5">
        <label htmlFor="productName" className="form-label">
          Tên sản phẩm
        </label>
        <input type="text" {...register("name")} id="productName" className="form-control" disabled />
      </div>
      <div className="mb-3">
        <label htmlFor="productImage" className="form-label">
          Ảnh sản phẩm
        </label>
        <input type="text" {...register("image")} id="productImage" className="form-control" disabled />
      </div>
      <div className="mb-3">
        <label htmlFor="productPrice" className="form-label">
          Giá sản phẩm
        </label>
        <input type="number" {...register("price")} id="productPrice" className="form-control" disabled />
      </div>
      <div className="mb-3">
        <label htmlFor="productPrice" className="form-label">
          Số lượng
        </label>
        <input type="number" {...register("quality")} id="productPrice" className="form-control" />
      </div>
      <button type="submit" className="btn btn-primary">
        Lưu
      </button>
    </form>
  );
};

export default CardEditPage;
