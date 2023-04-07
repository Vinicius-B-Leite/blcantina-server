import { Request, Response } from "express";
import { prisma } from "../../prisma";

class OrderController {
    async index(req: Request, res: Response) {
        const orders = await prisma.order.findMany({
            where: {
                status: 'openned'
            },
            include: {
                productInOrder: {
                    include: {
                        product: true
                    }
                }
            }
        })

        const newResponse = orders.map(order => {
            let totalPrice = 0
            order.productInOrder.forEach(p => {
                totalPrice += p.product.price * p.quantity
            })

            return { totalPrice, ...order }
        })


        return res.json(newResponse)
    }

    async store(req: Request, res: Response) {
        const order = await prisma.order.create({
            data: {
                status: 'openned'
            }
        })

        return res.json(order)
    }

    async update(req: Request, res: Response) {
        const { status, id } = req.body

        if (!status) throw new Error('Envie um status válido (openned | closed)')

        const orderExists = await prisma.order.findFirst({ where: { id } })

        if (!orderExists) throw new Error('ID do pedido inválido')

        const order = await prisma.order.update({
            data: {
                status
            },
            where: {
                id
            }
        })

        return res.json(order)
    }

}

export const orderController = new OrderController()