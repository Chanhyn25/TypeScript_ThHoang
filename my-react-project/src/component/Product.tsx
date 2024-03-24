import { Card, Col, Row } from "antd";
import React from "react";
import { Link } from "react-router-dom";

const ProductPage1 = (props) => {
  const { Meta } = Card;

  return (
    <div style={{ background: '#ECECEC', padding: '30px' }}>
      <Row gutter={[16, 16]}>
        {props.products.map((item) => (
          <Col span={6} key={item.id}>
            <Link to={`/products/${item.id}`}>
              <Card
                hoverable
                cover={<img alt={item.name} src={item.image} style={{ objectFit: 'cover', width: '100%', height: '200px' }} />}
              >
                <Meta
                  title={item.name}
                  description={
                    <>
                      <p>Giá Tiền: {item.price} VND</p>
                      <p>Mô tả sản phẩm: {item.description}</p>
                    </>
                  }
                />
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default ProductPage1;
