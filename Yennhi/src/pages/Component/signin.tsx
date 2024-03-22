import { Link, useNavigate } from "react-router-dom";
import { signin } from "../../api/auth";
import { Button, Form, Input, Space, message } from "antd";

type Props = {};

const Signin = (props: Props) => {
  const navigate = useNavigate();
  const onFinish = async (values: any) => {
    try {
      const user = await signin(values.email, values.password);
      // trong hàm signin()
      localStorage.setItem("user", JSON.stringify(user));
      message.success("Đăng nhập thành công !");
      navigate("/admin");
    } catch (error) {
      message.error("Lỗi Đăng Nhập, Tên Tài Khoản Và Mật Khẩu Sai Nhé !");
    }
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600, color: "white" }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          style={{ color: "white" }}
          label="Email"
          name="email"
          rules={[{ required: true, message: "Please input your email!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
      <Space >
        Bạn chưa có tài khoản ? <Link to={"/signup"}>Signup</Link>
      </Space>
    </>
  );
};

export default Signin