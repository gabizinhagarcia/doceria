import prismaClient from "../../prisma"
import { compare } from 'bcryptjs'
import { sign } from "jsonwebtoken"

interface Login {
    email: string,
    password: string

}
class LoginServices {
    async loginUsuarios({ email, password }: Login) {
        const usuario = await prismaClient.cadastroUsuarios.findFirst({
            where: {
                email: email
            }
        })
        if (!usuario) {
            throw new Error('Usuario ou Senha Incorretos')
        }
        const senhacrypt = await compare(password, usuario.senha)
        if (!senhacrypt) {
            throw new Error('Usuario ou Senha Incorretos')
        }

        const token = sign({
            id: usuario.id,
            nome: usuario.nome,
            email: usuario.email
        },
            process.env.JWT_SECRETO,
            {
                subject: usuario.id,
                expiresIn: '8h'
            }
        )

        return {
            id: usuario.id,
            nome: usuario.nome,
            email: usuario.email,
            token: token
        }
    }

     async verificaToken(id: string) {
        const resposta = await prismaClient.cadastroUsuarios.findFirst({
            where: {
                id: id
            },
            select: {
                id: true
            }
         })
        return resposta
     }
}

export { LoginServices }