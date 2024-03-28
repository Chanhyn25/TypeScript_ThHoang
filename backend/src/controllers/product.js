import Product from '../model/Product'
import Joi from 'joi';

const productSchema = Joi.object({
    name: Joi.string().required().min(3),
    price: Joi.number().required().positive(),
    image: Joi.string(),
    description: Joi.string(),
});

export const getAll = async (req, res) => {
    try {
        const products = await Product.find();
        return res.status(200).json({ products });
    } catch (error) {
        console.log(error);
    }
}
export const getById = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        return res.status(200).json({ product });
    } catch (error) {
        console.log(error);
    }
}

export const remove = async (req, res) => {
    try {
        const product = await Product.findByIdAndDelete(req.params.id);
        return res.status(200).json({ product });
    } catch (error) {
        console.log(error);
    }
}

export const add = async (req, res) => {
    try {
        const { error } = productSchema.validate(req.body, { abortEarly: false });
        if (error) {
            const messages = error.details.map(error => error.message)
            return res.status(400).json({ messages });
        }
        const product = await Product.create(req.body);
        return res.status(200).json({ product });
    } catch (error) {
        console.log(error);
    }
}
export const update = async (req, res) => {
    try {
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
        return res.status(200).json({ product });
    } catch (error) {
        console.log(error);
    }
}