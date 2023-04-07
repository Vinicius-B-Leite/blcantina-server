import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import { prisma } from "../prisma";


type Payload = {
    id: string
}

export async function isAdmin(req: Request, res: Response, next: NextFunction) {
    let { authorization } = req.headers

    if (!authorization) {
        return res.status(401).end()
    }

    const token = authorization.split(' ')[1]

    const { id } = verify(token, process.env.JWT_PASS ?? '') as Payload

    const user = await prisma.user.findFirst({ where: { uid: id } })

    if (!user?.admin) {
        return res.status(401).end()
    }
    next()
}
