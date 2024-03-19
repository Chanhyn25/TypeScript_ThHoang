import { TProduct } from "src/common/ProductType";

const hello = (yourName: string) => {
    console.log(`Xin chào bạn ${yourName}`);
}
const productItem = (product: TProduct) => {
    return `
     <div>
     <p>${product.id}</p>
     <p>${product.name}</p>
     </div>   
    `;
}
const product: TProduct = {
    id: 1,
    name:" Sản phẩm"
}
productItem(product);