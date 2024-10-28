import  prismaclient from '../../Prisma'

interface cadUsuarios {
    nome: string,
    email: string,
    password: string
}
class UsuariosServices {
    async cadastrarUsuarios({nome, email, password}:cadUsuarios){
        await prismaclient.cadastrarUsuarios.create({
            data: {
                nome: nome,
                email: email,
                senha: password
            }
        })
        return ({ dados: 'Cadastro Efetuado com Sucesso'})
    }

}

export {UsuariosServices}
