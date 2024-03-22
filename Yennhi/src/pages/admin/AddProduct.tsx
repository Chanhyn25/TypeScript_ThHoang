import { Button, Form, Input, message } from "antd";
import { useNavigate } from "react-router-dom";

interface IProduct{
    id: number,
    name: string,
    price: number,
    image: string,
    description: string
}

interface IProps {
    onAdd: (product: IProduct) => void;
}

const AddProductPage = (props : IProps) => {
    const navigate = useNavigate();

    const onFinish = (values : any) => {
        props.onAdd({...values,});
        message.success('Thêm sản phẩm thành công');
        navigate('/admin/products');
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed', errorInfo);
    };

    return(
        <div>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ width: 1000, margin: "0 auto" }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Tên Sản Phẩm"
          name="name"
          rules={[{ required: true, message: "Vui Lòng Nhập Tên Sản Phẩm" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Giá Tiền"
          name="price"
          rules={[{ required: true, message: "Vui Lòng Nhập Giá Tiền" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Image"
          name="image"
          rules={[{ required: true, message: "Please input product image!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Mô Tả"
          name="description"
          rules={[{ required: true, message: "Vui Lòng Nhập Mô Tả" }]}
        >
          <Input.TextArea />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Thêm Sản Phẩm
          </Button>
        </Form.Item>
      </Form>
    </div>
    );
};

export default AddProductPage;