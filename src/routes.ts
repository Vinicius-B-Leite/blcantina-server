import { Router } from "express";
import { orderController } from "./controller/order";
import { categoryController } from "./controller/category";

const routes = Router()

routes.get('/order', orderController.show)

routes.post('/category', categoryController.store)
routes.get('/category', categoryController.index)

export default routes