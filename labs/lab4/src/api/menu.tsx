import instance from "./confix";

export const menuList = async () => {
    try {
        const {data} = await instance.get("/menu");
        return data;
    } catch (error) {
        return error;
    }
}
export const menulistAdmin = async () =>  {
    try {
        const {data} = await instance.get("/menuAdmin");
        return data;
    } catch (error) {
        return error;
    }
}