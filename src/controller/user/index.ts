import { Request, Response } from "express";
import { prisma } from "../../prisma";
import { sign } from 'jsonwebtoken'

class UserController {

    async store(req: Request, res: Response) {
        const { username, password } = req.body

        if (!username || !password) throw new Error('Envie o username e password para criar um usuário')

        const userExists = await prisma.user.findFirst({ where: { username } })

        if (userExists) throw new Error('Este usuário já existe')

        const user = await prisma.user.create({
            data: {
                username,
                password,
                admin: false
            }
        })

        return res.json(user)
    }


    async login(req: Request, res: Response) {
        const { username, password } = req.body

        if (!username || !password) throw new Error('Envie o username e password para fazer login')

        const user = await prisma.user.findFirst({
            where: {
                username
            }
        })

        if (!user) throw new Error('Usuário não existe')

        if (user?.password !== password) throw new Error('Usuário ou senha incorreta')

        const token = sign({ id: user.uid }, process.env.JWT_PASS ?? '', { expiresIn: '15d' })
        return res.json({ token, ...user })
    }
}

export const userController = new UserController()