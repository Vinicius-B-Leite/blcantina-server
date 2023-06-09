import { Request, Response } from "express";
import { prisma } from "../../prisma";

class ProductController {
    async store(req: Request, res: Response) {
        const {
            imageURL,
            name,
            price,
            categoryID,
            priceRebate, } = req.body

        if (!imageURL || !name || !price || !categoryID) throw new Error('Envia todos os valores para criar um produto')

        const product = await prisma.product.create({
            data: {
                imageURL,
                name,
                price,
                categoryID,
                priceRebate,
            }
        })

        return res.json(product)
    }

    async index(req: Request, res: Response) {
        const products = await prisma.category.findMany({
            include: {
                product: true
            }
        })

        return res.json(products)
    }

}

export const productController = new ProductController()