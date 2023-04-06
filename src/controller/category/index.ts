import { Request, Response } from "express";
import { prisma } from "../../prisma";

class CategoryController {
    async store(req: Request, res: Response) {
        const name = req.body.name as string

        const category = await prisma.category.create({
            data: {
                name,
            }
        })
        return res.json(category)
    }

    async index(req: Request, res: Response) {
        const name = req.body.name as string

        const category = await prisma.category.findMany()
        return res.json(category)
    }
    
}

export const categoryController = new CategoryController()