import prismaClient from "../../prisma"
import { hash } from 'bcryptjs'

interface CadUsuarios {
    nome: string
    cpf: string
    email: string
    password: string
    cep: string
    telefone: string
}

interface AlterarUsuarios {
    id: string
    nome: string
    email: string
}

class UsuariosServices {
    async cadastrar_usuarios({ nome, cpf, email, password, cep, telefone, }: CadUsuarios) {

        const cpfExiste = await prismaClient.cadastroUsuarios.findFirst({
            where: {
                cpf: cpf
            }
        })
        if (cpfExiste) {
            throw new Error('CPF já esta cadastrado')
        }

        const passCrypt = await hash(password, 8)

        const resposta = await prismaClient.cadastroUsuarios.create({
            data: {
                nome: nome,
                cpf: cpf,
                email: email,
                senha: passCrypt,
                cep: cep,
                telefone: telefone,
            }
        })
        return ({ dados: 'Cadastro Efetuado com Sucesso' })
    }
    async consultar_usuarios() {
        const resposta = await prismaClient.cadastroUsuarios.findMany({
            select: {
                id: true,
                nome: true,
                email: true,
                cpf: true

            }
        })
        return resposta
    }
    async ConsultarUsuariosUnico(id: string) {
        const resposta = await prismaClient.cadastroUsuarios.findFirst({
            where: {
                id: id
            },
            select: {
                nome: true,
                email: true,
                senha: true
            }
        })
        return resposta

    }

    async alterarDadosUsuarios({ id, nome, email }: AlterarUsuarios) {
        await prismaClient.cadastroUsuarios.update({
            where: {
                id: id
            },
            data: {
                nome: nome,
                email: email
            }
        })
        return ({ dados: 'cadastro efetuado com sucesso' })
    }

    async apagarUsuarios(id: string) {
        await prismaClient.cadastroUsuarios.delete({
            where: {
                id: id
            }
        })
        return ({ dados: 'registro apagado com sucesso' })
    }
}

export { UsuariosServices }