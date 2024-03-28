import { joiResolver } from "@hookform/resolvers/joi"
import Joi from 'joi';
import { useForm } from "react-hook-form";
import { IProduct } from "../interfaces/product";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const productSchema = Joi.object({
    name: Joi.string().required().min(3),
    price: Joi.number().required().positive(),
    image: Joi.string(),
    description: Joi.string(),
});
const ProductAdd = () => {
    const navigate = useNavigate();
    const queryClient = useQueryClient();
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: joiResolver(productSchema),
        defaultValues: {
            name: "",
            price: 0,
            image: "",
            description: "",
        }
    });

    const { mutate } = useMutation({
        mutationFn: async (product: IProduct) => {
            const { data } = await axios.post(`http://localhost:8080/api/product/add`, product);
            return data.product;
        },
        onSuccess: () => {
            alert('Thêm sản phẩm thành công');
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
            <h2 className="mt-4">Thêm Sản Phẩm</h2>
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
                <button className="btn btn-primary">THÊM</button>
            </form>
        </div>
    )
}

export default ProductAdd