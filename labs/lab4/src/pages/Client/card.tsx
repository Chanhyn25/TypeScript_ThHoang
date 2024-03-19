import React from 'react';
import { Link } from 'react-router-dom';

interface Card {
  id: number;
  name: string;
  image: string;
  price: number;
  quality: number;
}

interface Props {
  cards: Card[];
  onRemoveCard: (id: number) => void;
}

const CardPage: React.FC<Props> = ({ cards, onRemoveCard }) => {
  return (
    <>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 className="h2">Giỏ hàng</h1>
      </div>
      <div className="table-responsive small">
        <table className="table table-striped table-sm">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Ảnh sản phẩm</th>
              <th scope="col">Tên sản phẩm</th>
              <th scope="col">Giá sản phẩm</th>
              <th scope='col'>Số lượng</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {cards.map((card, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>
                  <img src={card.image} alt={card.name} width={50} />
                </td>
                <td>
                  <h4>{card.name}</h4>
                </td>
                <td>
                  <span>{card.price}</span>
                </td>
                <td>
                  <span>{card.quality}</span>
                </td>
                <td>
                  <div className='d-flex'>
                    <button className='btn btn-danger' onClick={() => onRemoveCard(card.id)}>Xóa</button>
                    <Link to={`/cards/${card.id}/edit`} className='btn btn-primary ml-3'>Cập nhập</Link>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default CardPage;
