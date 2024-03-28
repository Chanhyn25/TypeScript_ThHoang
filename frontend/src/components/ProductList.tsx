import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import axios from "axios"
import { Link } from "react-router-dom";
import { IProduct } from "../interfaces/product";


const ProductList = () => {
    const queryClient = useQueryClient();
    const { data } = useQuery({
        queryKey: ['PRODUCTS'],
        queryFn: async () => {
            const { data } = await axios.get(`http://localhost:8080/api/products`);
            return data.products;
        }
    })
    const { mutate } = useMutation({
        mutationFn: async (id: string) => {
            return (window.confirm('Bạn chắc chắn muốn xóa không') && (await axios.delete(`http://localhost:8080/api/product/${id}`))
            );
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["PRODUCTS"] });
        }
    });
    return <div>

        <div className="s-flex justify-content-between"></div>
        <h2 className="mt-2" >Quản lý sản phẩm</h2>
        <Link to="/products/add" className="btn btn-primary">Thêm sản phẩm</Link>
        <table className="table table-bordered mt-3">
            <thead>
                <tr>
                    <th>STT</th>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Mô tả</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {data?.map((product: IProduct, index: number) => (
                    <tr key={index}>
                        <td>{index + 1}</td>
                        <td>
                            <img src={product.image} width={60} />
                        </td>
                        <td>{product.name}</td>
                        <td>{product.price}</td>
                        <td>{product.description}</td>
                        <td>
                            <Link to={`products/${product._id}/edit`} className="btn btn-primary">EDIT</Link>-
                            <button onClick={() => mutate(product._id)} className="btn btn-danger">DELETE</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
}

export default ProductList