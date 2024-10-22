import prismaClient from "../../prisma"

interface CadUsuarios{
    nome: string
    cpf: string
    email: string
    password: string
    cep: string
    telefone: string
}

class UsuariosServices{
 async cadastrar_usuarios({nome, cpf, email, password, cep, telefone, }: CadUsuarios){

    const cpfExiste = await prismaClient.cadastroUsuarios.findFirst({
        where: {
            cpf: cpf 
        }
    })
    if(cpfExiste){
        throw new Error('CPF js esta cadastrado')
    }

    const resposta = await prismaClient.cadastroUsuarios.create({
        data: {
            nome: nome,
            cpf: cpf,
            email: email,
            senha: password,
            cep: cep,
            telefone: telefone,
        }
    })
    return ({dados: 'Cadastro Efetuado com Sucesso'})
 }
 async consultar_usuarios(){
    const resposta = await prismaClient.cadastroUsuarios.findMany({
        select: {
            nome: true,
            email: true,
            cpf: true 

        }
    })
    return resposta 
 }
 
}

export { UsuariosServices }