import { Button, Image, Input, Popconfirm, Space, message } from "antd";
import Table, { ColumnsType } from "antd/es/table";
import { useState } from "react";
import { Link } from "react-router-dom";
import { IProduct } from "../../types/product";


interface DataType extends IProduct {
    key: string| number;
}

const ProductManagerPage = (props) => {
    const [searchText, setSearchText] = useState('');
    const removeProduct = (id) => {
        props.onRemove(id);
        message.success('Xóa sản phẩm thành công');
    };

 
const filteredData = props.products.filter((item)=> 
    item.name.toLowerCase().includes(searchText.toLowerCase())
);

const data = filteredData.map((item) => {
    return {
        key: item.id,
        ...item,
    };
});

interface DataType {
    key: string;
    name: string;
    price: number;
    address: string;
    tags: string[];
}

const columns: ColumnsType<DataType> = [
    {
        title: 'Tên sản phẩm',
        dataIndex: 'name',
        key: 'name',
        render: (text) => <a>{text}</a>,
    },
    {
        title: 'Giá tiền',
        dataIndex: 'price',
        key: 'price',
        render: (text) => <a>{text}</a>,
    },
    {
        title: 'Ảnh',
        dataIndex: 'image',
        key: 'image',
        render: (url) => <Image width={80} src={url}/>,
    },
    {
        title: 'Mô Tả',
        dataIndex: 'description',
        key: 'description',
        render: (text) => <a>{text}</a>,
    },
    {
        title: 'Action',
        key: 'action',
        render : (record) => (
            <Space size='middle'>
                <Popconfirm
                    placement="top"
                    title= 'Bạn có muốn xóa không'
                    onConfirm={() => removeProduct(record.key)}
                    okText = 'Yes'
                    cancelText = 'No'
                >
                    <Button type="primary">Xóa sản phẩm thành công</Button>
                </Popconfirm>

                <Button type="primary">
                    <Link to= {`/admin/products/${record.key}/update`}>
                        Cập nhập sản phẩm
                    </Link>
                </Button>
            </Space>
        ),
    },
];

return (
    <div>
        <Input.Search
            placeholder = 'Tìm kiếm'
            allowClear 
            onChange= {(e) => setSearchText(e.target.value)}
            style= {{width : 300, marginBottom: 16}}
        />
        <Button type="primary">
            <Link to={'/admin/products/add'}>Thêm Sản Phẩm</Link>
        </Button>
        <Table columns={columns} dataSource={data} pagination={{ pageSize: 5 }} />
    </div>
);
};
export default ProductManagerPage