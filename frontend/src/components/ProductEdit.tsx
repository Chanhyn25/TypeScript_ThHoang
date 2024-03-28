import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useForm } from "react-hook-form";
import { Link, useNavigate, useParams } from "react-router-dom";
import { IProduct } from "../interfaces/product";

const ProductEdit = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const queryClient = useQueryClient();

    const { data } = useQuery({
        queryKey: ['PRODUCTS', id],
        queryFn: async () => {
            const { data } = await axios.get(`http://localhost:8080/api/product/${id}`);
            reset(data.product);
            return data.product;
        }
    })

    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        // resolver: joiResolver(productSchema),
        // defaultValues: {
        //     name: "",
        //     price: 0,
        //     image: "",
        //     description: "",
        // }
    });

    const { mutate } = useMutation({
        mutationFn: async (product: IProduct) => {
            console.log("product", product);
            const { data } = await axios.put(`http://localhost:8080/api/product/${product._id}`, product);
            return data.product;
        },
        onSuccess: () => {
            alert('Cập nhật sản phẩm thành công');
            queryClient.invalidateQueries({
                queryKey: ["PRODUCTS"],
            })
        }
    })
    const onSubmit = (product: IProduct) => {
        mutate(product);
        navigate("/");
    }
    return (
        <div>
            <h2 className="mt-4">Cập Nhật Sản Phẩm</h2>
            <Link to="/" className="btn btn-danger mt-3">Thoát</Link>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-3">
                    <label htmlFor="" className="form-label">Tên</label>
                    <input type="text" className="form-control" placeholder="thêm sản phẩm" {...register("name", { required: true, minLength: 3 })} />
                    {errors?.name?.message && <span className="text-danger">{errors?.name?.message}</span>}
                </div>
                <div className="mb-3">
                    <label htmlFor="" className="form-label">Giá</label>
                    <input type="number" className="form-control" placeholder="thêm sản phẩm" {...register("price", { required: true })} />
                    {errors?.price?.message && <span className="text-danger">{errors?.price?.message}</span>}
                </div>
                <div className="mb-3">
                    <label htmlFor="" className="form-label">Ảnh</label>
                    <input type="text" className="form-control" placeholder="thêm sản phẩm" {...register("image", { required: true })} />

                </div>
                <div className="mb-3">
                    <label htmlFor="" className="form-label">Mô tả</label>
                    <textarea id="" cols={30} rows={5} className="form-control"{...register("description")}></textarea>
                </div>
                <button className="btn btn-primary">Cập Nhật</button>
            </form>
        </div>
    )
}

export default ProductEdit