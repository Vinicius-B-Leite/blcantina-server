import { Request, Response } from "express";
import { prisma } from "../../prisma";

class ProductInOrderController {
    async store(req: Request, res: Response) {
        const { quantity, productID, orderID } = req.body

        const productInOrder = await prisma.productInOrder.create({
            data: {
                quantity,
                productID,
                orderID
            },
        })

        return res.json(productInOrder)
    }
    async destroy(req: Request, res: Response) {
        const { id } = req.body

        await prisma.productInOrder.delete({ where: { id } })

        return res.end()
    }
    async update(req: Request, res: Response) {
        const { quantity, id } = req.body

        const productInOrder = await prisma.productInOrder.update({
            data: {
                quantity
            },
            where: {
                id
            }
        })

        return res.json(productInOrder)
    }
}
export const productInOrderController = new ProductInOrderController()