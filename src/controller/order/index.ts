import { Request, Response } from "express";
import { prisma } from "../../prisma";

class OrderController {
    async show(req: Request, res: Response) {

        const { orderID } = req.body
        const orders = await prisma.productInOrder.findMany({
            include: {
                order: true,
                product: true,

            },
            where: {
                orderID: orderID
            }
        })
        return res.json(orders)
    }
}

export const orderController = new OrderController()