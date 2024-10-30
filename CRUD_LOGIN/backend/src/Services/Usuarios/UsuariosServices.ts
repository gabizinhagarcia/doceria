import prismaclient from '../../Prisma'

interface cadUsuarios {
    nome: string,
    email: string,
    password: string
}
class UsuariosServices {
    async cadastrarUsuarios({ nome, email, password }: cadUsuarios) {
        await prismaclient.cadastrarUsuarios.create({
            data: {
                nome: nome,
                email: email,
                senha: password
            }
        })
        return ({ dados: 'Cadastro Efetuado com Sucesso' })
    }
    async consultarUsuarios() {
        const resposta = await prismaclient.cadastrarUsuarios.findMany({
            select: {
                id: true,
                nome: true,
                email: true
            }
        })
        return resposta
    }
}

export { UsuariosServices }
