import React, { useEffect, useState } from 'react'
import { IProduct } from '../interface/TProduct'
import { useParams } from 'react-router-dom';

type Props = {}

const ProductDetail = (props: Props) => {
    const [product, setProduct] = useState<IProduct | null>(null);
    const { id } = useParams();
    console.log(id);
    useEffect(() => {
    (async() => {
        const data = await getProduct(+id!);
        setProduct(data);
    })();
    });
    return (
        <div className='container'>
           {id}
            
        </div>
    )
}

export default ProductDetail