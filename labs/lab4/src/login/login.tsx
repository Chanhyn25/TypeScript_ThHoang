import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { getUser } from '../api/login';

interface User {
    id: number;
    email: string;
    password: string;
}

export const Login: React.FC = () => {
    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();
    const [error, setError] = useState<string | null>(null);
    const [users, setUsers] = useState<User[]>([]);

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const data = await getUser();
                setUsers(data);
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };
        fetchUserData();
    }, []);

    const onSubmit = async (formData: { email: string; password: string; }) => {
        try {
            // Lọc danh sách người dùng dựa trên email và mật khẩu
            const filteredUsers = users.filter(user => user.email === formData.email && user.password === formData.password);
            if (filteredUsers.length > 0) {
                // Nếu có người dùng trùng khớp, điều hướng đến trang dashboard
                if (filteredUsers[0].id === 1) {
                    navigate('/admin');
                } else {
                    navigate('/');
                }
            } else {
                // Nếu không có người dùng trùng khớp, hiển thị thông báo lỗi
                setError("Tài khoản hoặc mật khẩu không chính xác");
            }
        } catch (error) {
            setError("An error occurred during login");
            console.error("Login error:", error);
        }
    };
    

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control" {...register("email")} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input type="password" className="form-control" {...register("password")} id="exampleInputPassword1" placeholder="Password" />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
            {error && <p>{error}</p>}
        </div>
    );
};
