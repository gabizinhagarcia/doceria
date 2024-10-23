import prismaClient from "../../prisma"

interface CadItensPedidos{
    quantidade: string
    idProdutos: string
    
}

class ItensPedidosServices{
 async cadastrar_ItensPedidos({quantidade, idProdutos}: CadItensPedidos){
    const resposta = await prismaClient.cadastroItensPedidos.create({
        data: {
            quantidade: quantidade,
            idProdutos: idProdutos
           
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