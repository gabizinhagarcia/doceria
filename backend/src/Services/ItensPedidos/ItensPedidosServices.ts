import prismaClient from "../../prisma"

interface CadItensPedidos{
    quantidade: string
}

class ItensPedidosServices{
 async cadastrar_ItensPedidos({quantidade}: CadItensPedidos){
    const resposta = await prismaClient.cadastroItensPedidos.create({
        data: {
            quantidade: quantidade
        }
    })
    return ({dados: 'Cadastro Efetuado com Sucesso'})
 }
 async consultar_ItensPedidos(){
    const resposta = await prismaClient.cadastroItensPedidos.findMany({
        select: {
            quantidade: true,
            
          


        }
    })
    return resposta 
 }
 
}

export { ItensPedidosServices }