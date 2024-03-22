import { Button, Form, Input, message } from "antd";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { IProduct } from "../../types/product";

interface IProps {
    products: IProduct[];
    onUpdate: (product: IProduct) => void;
}

const UpdateProduct = (props: IProps) => {
    const {id} = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useState<IProduct>();

    useEffect(() => {
        const currentProduct = props.products.find(
            (product: IProduct) =>product.id === Number(id)
        );
        setProduct(currentProduct);
    }, [props]);

    useEffect(() => {
        setFields();
      }, [product]);
    
      const [form] = Form.useForm();
    
      const setFields = () => {
        form.setFieldsValue({
          id: product?.id,
          name: product?.name,
          price: product?.price,
          image: product?.image,
          description: product?.description,
        });
      };
    
      const onFinish = (values: any) => {
        const updatedProduct = {
          ...values,
        };
        props.onUpdate(updatedProduct);
        message.success("Cập Nhập Sản Phẩm Thành Công !");
        navigate("/admin/products");
      };
    
      const [previewImage, setPreviewImage] = useState<string>();
    
      return (
        <div>
          <Form form={form} style={{ maxWidth: 600 }} onFinish={onFinish}>
            <Form.Item
              label=""
              name="id"
              style={{ display: "none" }}
              rules={[{ required: true, message: "Please input product ID!" }]}
            >
              <Input disabled />
            </Form.Item>
    
            <Form.Item
              label="Product Name"
              name="name"
              rules={[{ required: true, message: "Please input product name!" }]}
            >
              <Input />
            </Form.Item>
    
            <Form.Item
              label="Product Price"
              name="price"
              rules={[{ required: true, message: "Please input product price!" }]}
            >
              <Input type="number" min={0} step={0.01} />
            </Form.Item>
    
            <Form.Item
              label="Image"
              name="image"
              rules={[{ required: true, message: "Please input product image!" }]}
            >
              <Input/>
            </Form.Item>
    
            <Form.Item
              label="Description"
              name="description"
              rules={[
                { required: true, message: "Please input product description!" },
              ]}
            >
              <Input.TextArea />
            </Form.Item>
    
            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
              <Button type="primary" htmlType="submit">
                Update Product
              </Button>
            </Form.Item>
          </Form>
        </div>
      );
}

export default UpdateProduct