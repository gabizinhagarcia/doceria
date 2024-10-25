import prismaClient from '../../prisma';
import { compare } from 'bcryptjs'


interface LoginUsuarios{
    email: string
    password: string
}

class LoginUsuariosServices{
async logi_usuarios({email, password}: LoginUsuarios){
    const usuario = await prismaClient.cadastroUsuarios.findFirst({
        where:{
            email: email 
        }
    })
    if(!usuario){
        throw new Error('Usuario ou Senha Incorretos!!!')
        
    }

    const ComparaSenha = await compare(password, usuario.senha)
if(!ComparaSenha){
throw new Error('Usuario ou Senha Incorretos!!!')
}

return ({dados: 'Autenticação Efetuada com Sucesso'})
}
}

export{ LoginUsuariosServices }