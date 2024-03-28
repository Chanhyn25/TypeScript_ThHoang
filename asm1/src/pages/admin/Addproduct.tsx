import { Button, Form, Input, message } from "antd";
import { useNavigate } from "react-router-dom";

interface IProduct {
    id: number;
    name: string;
    price: number;
    image: string;
    description: string;
}
interface IProps {
    onAdd: (product: IProduct) => void;
}

const AddProductPage = (props: IProps) => {
    const navigate = useNavigate();
    const onFinish = (values : any) => {
        props.onAdd({...values});
        message.success('Thêm sản phẩm thành công');
        navigate('/admin/products');
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed', errorInfo);
    };

    return (
        <div>
            <Form onFinish={onFinish}
                onFinishFailed={onFinishFailed}>
                    
                    <Form.Item
                        label =" Tên Sản Phẩm"
                        name="name"
                        rules={[
                            {
                                required:true,
                                message: "Vui lòng nhập lại tên"
                            }
                        ]}
                    >
                        <Input/>
                    </Form.Item>

                    <Form.Item
                        label =" Tên Sản Phẩm"
                        name="name"
                        rules={[
                            {
                                required:true,
                                message: "Vui lòng nhập lại tên"
                            }
                        ]}
                    >
                        <Input/>
                    </Form.Item>

                    <Form.Item
                        label ="Giá tiền"
                        name="price"
                        rules={[
                            {
                                required:true,
                                message: "Vui lòng nhập lại giá tiền"
                            }
                        ]}
                    >
                        <Input/>
                    </Form.Item>

                    <Form.Item
                        label ="Ảnh sản phẩm"
                        name="image"
                        rules={[
                            {
                                required:true,
                                message: "Vui lòng nhập lại ảnh"
                            }
                        ]}
                    >
                        <Input/>
                    </Form.Item>

                    <Form.Item
                        label ="Mô tả"
                        name="description"
                        rules={[
                            {
                                required:true,
                                message: "Vui lòng nhập lại mô tả"
                            }
                        ]}
                    >
                        <Input.TextArea/>
                    </Form.Item>

                    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                        <Button type= "primary" htmlType= "submit">
                            Thêm sản phẩm
                        </Button>
                    </Form.Item>
            </Form>
        </div>
    );
};

export default AddProductPage;