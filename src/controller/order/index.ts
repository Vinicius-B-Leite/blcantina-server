import { Request, Response } from "express";
import { prisma } from "../../prisma";

class OrderController {
    async index(req: Request, res: Response) {
        const orders = await prisma.order.findMany({
            include: {
                productInOrder: {
                    include: {
                        product: true
                    }
                }
            }
        })
        return res.json(orders)
    }

    async store(req: Request, res: Response) {
        const order = await prisma.order.create({
            data: {
                totalPrice: 0
            }
        })

        return res.json(order)
    }

    async update(req: Request, res: Response) {
        const { totalPrice, id } = req.body
        const order = await prisma.order.update({
            data: {
                totalPrice
            },
            where: {
                id
            }
        })

        return res.json(order)
    }
}

export const orderController = new OrderController()