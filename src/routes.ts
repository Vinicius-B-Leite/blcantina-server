import { Router } from "express";
import { orderController } from "./controller/order";
import { categoryController } from "./controller/category";
import { productController } from "./controller/product";
import { productInOrderController } from "./controller/productInOrder";
import { userController } from "./controller/user";
import { isAdmin } from "./middlewares/isAdmin";

const routes = Router()

routes.get('/order', orderController.index)
routes.post('/order', orderController.store)
routes.put('/order', isAdmin,orderController.update)

routes.post('/product', isAdmin, productController.store)
routes.get('/product', productController.index)

routes.post('/category', isAdmin,categoryController.store)
routes.get('/category', categoryController.index)


routes.post('/productinorder', productInOrderController.store)
routes.delete('/productinorder', productInOrderController.destroy)
routes.put('/productinorder', productInOrderController.update)

routes.post('/user', userController.store)
routes.post('/user/login', userController.login)


export default routes