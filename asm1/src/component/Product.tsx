import { Card, Col, Row } from 'antd';
import React from 'react'
import { Link } from 'react-router-dom';

const ProductPage = (props) => {
    const {Meta} = Card;
  return (
    <div>
        <Row>
            {props.products.map((item)=> (
            <Col span={6} key={item.id}>
                <Link to= {`/products/${item.id}`}>
                   <Card
                   hoverable
                   cover = {<img alt={item.name} src = {item.image}/>}>
                    <Meta title= {item.name}
                        description = {
                            <>
                                <p>Giá tiền : {item.price}</p>
                                <p>Mô tả sản phẩm : {item.description}</p>
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

export default ProductPage