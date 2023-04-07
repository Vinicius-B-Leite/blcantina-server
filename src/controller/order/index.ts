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
            data:{
                status: 'openned'
            }
        })

        return res.json(order)
    }

    
}

export const orderController = new OrderController()