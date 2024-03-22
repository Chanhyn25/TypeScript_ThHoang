import { Layout, Menu } from "antd";
import { Link, Outlet } from "react-router-dom";
import { HomeOutlined, UserOutlined, PhoneOutlined } from '@ant-design/icons';

const { Header, Content, Footer } = Layout;

const WebsiteLayout = () => {
  return (
    <Layout>
      <Header style={{ backgroundColor: '#f0f2f5' }}>
        <div className='logo' style={{ float: 'left' }}>
          <h2 style={{ margin: '0' }}>Nguyen Thi Hanh</h2>
        </div>
        <Menu
          theme='light'
          mode='horizontal'
          defaultSelectedKeys={['home']}
          style={{ float: 'right', lineHeight: '64px' }}
        >
          <Menu.Item key='home' icon={<HomeOutlined />}>
            <Link to={'/'}>Trang Chủ</Link>
          </Menu.Item>
          <Menu.Item key='about' icon={<UserOutlined />}>
            <Link to={'/products'}>Sản Phẩm</Link>
          </Menu.Item>
          <Menu.Item key='signup' icon={<PhoneOutlined />}>
            <Link to={'/signup'}>Đăng Ký</Link>
          </Menu.Item>
          <Menu.Item key='signin'>
            <Link to={'/signin'}>Đăng Nhập</Link>
          </Menu.Item>
        </Menu>
      </Header>
      <Content>
        <div
          style={{
            width: '100%',
          }}
        >
          <img
            src='https://img.timviecthietke.com/2021/06/kich-thuoc-banner-website-1-768x251.png '
            alt=''
            style={{ width: '100%' }}
          />
        </div>
      </Content>
      <Outlet />
      <Footer style={{ textAlign: 'center' }}>
        ©{new Date().getFullYear()} Nguyen Thi Hanh
      </Footer>
    </Layout>
  );
};
export default WebsiteLayout