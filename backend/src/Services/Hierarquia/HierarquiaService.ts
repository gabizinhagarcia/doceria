import prismaClient from "../../prisma"

interface CadHierarquia{
    nome: string
}

class HierarquiaServices{
 async cadastrar_Hierarquia({nome}: CadHierarquia){
    const resposta = await prismaClient.cadastroHierarquia.create({
        data: {
            nome: nome,
        }
    })
    return ({dados: 'Cadastro Efetuado com Sucesso'})
 }
 async consultar_hierarquia(){
    const resposta = await prismaClient.cadastroHierarquia.findMany({
        select: {
            nome: true,
        }
    })
    return resposta 
 }
 
}

export { HierarquiaServices }