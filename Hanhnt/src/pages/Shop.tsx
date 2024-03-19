import React from 'react'
import { TProduct } from 'src/common/ProductType'

type Props = {
    product: TProduct;
}

const Shop = (props: Props) => {
  return (
    <div>
        <p>{props.product.id}</p>
        <p>{props.product.name}</p>
    </div>
  )
}

export default Shop