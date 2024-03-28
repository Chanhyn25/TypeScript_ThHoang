import React from 'react';
import { Layout, Menu } from 'antd';
import { HomeOutlined, UserOutlined, PhoneOutlined } from '@ant-design/icons';
import { Link, Outlet } from 'react-router-dom';

const { Header, Content, Footer } = Layout;

const WebsiteLayout = () => {
  return (
    <Layout>
      <Header style={{ backgroundColor: '#f0f2f5' }}>
        <div className='logo' style={{ float: 'left' }}>
          <h2 style={{ margin: '0', color: '#001529', padding: '0 24px', fontSize: '24px', lineHeight: '64px' }}>Nguyen Thi Hanh</h2>
        </div>
        <Menu
          theme='light'
          mode='horizontal'
          defaultSelectedKeys={['home']}
          style={{ float: 'right', lineHeight: '64px' }}
        >
          <Menu.Item key='home' style={{ backgroundColor: '#f0f2f5' }} icon={<HomeOutlined />}>
            <Link to={'/'}>Trang Chủ</Link>
          </Menu.Item>
          <Menu.Item key='about' style={{ backgroundColor: '#f0f2f5' }} icon={<UserOutlined />}>
            <Link to={'/products'}>Sản Phẩm</Link>
          </Menu.Item>
          <Menu.Item key='signup' style={{ backgroundColor: '#f0f2f5' }} icon={<PhoneOutlined />}>
            <Link to={'/signup'}>Đăng Ký</Link>
          </Menu.Item>
          <Menu.Item key='signin' style={{ backgroundColor: '#f0f2f5' }}>
            <Link to={'/signin'}>Đăng Nhập</Link>
          </Menu.Item>
        </Menu>
      </Header>
      <Content style={{ backgroundColor: '#fff' }}>
        <div
          style={{
            width: '100%',
          }}
        >
          <img
            src='https://img.timviecthietke.com/2021/06/kich-thuoc-banner-website-1-768x251.png'
            alt=''
            style={{ width: '100%' }}
          />
        </div>
        <Outlet />
      </Content>
      <Footer style={{ textAlign: 'center', backgroundColor: '#f0f2f5', padding: '24px 50px' }}>
        ©{new Date().getFullYear()} Nguyen Thi Hanh
      </Footer>
    </Layout>
  );
};

export default WebsiteLayout;
