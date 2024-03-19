import instance from "./confix";
export interface Product {
    id: number;
    name: string;
    price: number;
    description: string;
    quality: number;
}
export const getCards = async (): Promise<Product[]> => {
    try {
        const { data } = await instance.get('/cards');
        return data;
    } catch (error) {
        console.log(error);
        throw error;
    }
};

export const getCardsById = async (id: number): Promise<Product[]> => {
    try {
        const { data } = await instance.get(`/cards/${id}`);
        return data;
    } catch (error) {
        console.log(error);
        throw error;
    }
};

export const removeCardById = async (id: number): Promise<Product[]> => {
    try {
        const { data } = await instance.delete(`/cards/${id}`);
        return data;
    } catch (error) {
        console.log(error);
        throw error;
    }
};

export const addCard = async (card: Product): Promise<Product[]> => {
    try {
        card.quality = 1;
        const { data } = await instance.post('/cards', card);
        return data;
    } catch (error) {
        console.log(error);
        throw error;
    }
};

export const updateCard = async (card: Product): Promise<Product[]> => {
    try {
        const { data } = await instance.put(`/cards/${card.id}`, card);
        return data;
    } catch (error) {
        console.log(error);
        throw error;
    }
};
