import express from 'express';
import { connect } from 'mongoose';
import productRouter from './router/product';
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(cors());

(async () => {
    try {
        await connect(`mongodb://localhost:27017/demo_thi_thu`);
    } catch (error) {
        console.log(error);
    }
})();

app.use(`/api`, productRouter)
export const viteNodeApp = app;