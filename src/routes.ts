import { Router } from "express";
import { orderController } from "./controller/order";
import { categoryController } from "./controller/category";
import { productController } from "./controller/product";
import { productInOrderController } from "./controller/productInOrder";

const routes = Router()

routes.get('/order', orderController.index)
routes.post('/order', orderController.store)

routes.post('/product', productController.store)
routes.get('/product', productController.index)

routes.post('/category', categoryController.store)
routes.get('/category', categoryController.index)


routes.post('/productinorder', productInOrderController.store)
routes.delete('/productinorder', productInOrderController.destroy)
routes.put('/productinorder', productInOrderController.update)

export default routes