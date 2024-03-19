import instance from "./confix";
export const getUser = async () => {
    try {
        const { data } = await instance.get(`/users`);
        return data;
    } catch (error) {
        console.log(error);
        throw error; // Rethrow lỗi để xử lý ở các phần gọi hàm này
    }
};
