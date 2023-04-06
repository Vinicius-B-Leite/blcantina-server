import { Router } from "express";
import { orderController } from "./controller/order";
import { categoryController } from "./controller/category";
import { productController } from "./controller/product";

const routes = Router()

routes.get('/order', orderController.show)

routes.post('/product', productController.store)
routes.get('/product', productController.index)

routes.post('/category', categoryController.store)
routes.get('/category', categoryController.index)

export default routes