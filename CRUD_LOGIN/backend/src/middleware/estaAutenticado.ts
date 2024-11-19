import { Request, Response, NextFunction } from "express"
import { verify } from "jsonwebtoken"

interface payload {
    sub: string
}

export function estaAutenticado(
    req: Request,
    res: Response,
    next: NextFunction
) {
    const autToken = req.headers.authorization
    if (!autToken) {
        return res.json({ dados: 'token invalido' })
    }

    const [, token] = autToken.split(' ')
    try {
        const { sub } = verify(
            token,
            process.env.JWT_SECRETO
        ) as payload
        req.usuarioId = sub
        return next()

    } catch (err) {
        return res.json({ dados: 'token invalido' })

    }

}