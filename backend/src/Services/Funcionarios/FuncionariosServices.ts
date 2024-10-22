import prismaClient from "../../prisma"

interface CadFuncionarios{
    nome: string
    cpf: string
    email: string
    password: string
    telefone: string
    idHierarquia: string
}

class FuncionariosServices{
 async cadastrar_funcionarios({nome, cpf, email, password, telefone, idHierarquia}: CadFuncionarios){
    const resposta = await prismaClient.cadastroFuncionarios.create({
        data: {
            nome: nome,
            cpf: cpf,
            email: email,
            senha: password,
            telefone: telefone,
            idHierarquia: idHierarquia
         
        }
    })
    return ({dados: 'Cadastro Efetuado com Sucesso'})
 }
 async consultar_funcionarios(){
    const resposta = await prismaClient.cadastroFuncionarios.findMany({
        select: {
            nome: true,
            email: true,
            cpf: true 

        }
    })
    return resposta 
 }
 
}

export { FuncionariosServices }