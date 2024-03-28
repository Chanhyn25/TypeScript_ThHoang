import { Router } from "express";
import { add, getAll, getById, remove, update } from "../controllers/product";

const router = Router();
router.get('/products', getAll);
router.get('/product/:id', getById);
router.delete('/product/:id', remove);
router.post('/product/add', add);
router.put('/product/:id', update);

export default router;