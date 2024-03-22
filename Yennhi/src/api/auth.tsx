import instance from "./instance";

export const signin = async(email: string, password: string) => {
    try {
        const response = await instance.get('https://localhost:3000/users');
        const user = response.data.find(
            (u: any) => u.email === email && u.password === password
        );
        if (user) {
            return user;
        } else {
            throw new Error("ok");
        }
    } catch (error) {
        throw error;
    }
};

export const signup = async( values : any) =>  {
    try {
        const response = await instance.post('/users', values);
    } catch (error) {
        console.error('Error' , error);
    }
};