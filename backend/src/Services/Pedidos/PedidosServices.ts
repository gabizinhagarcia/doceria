import prismaClient from "../../prisma"

interface CadPedidos{
    data_da_compra: string
    status: string
}

class PedidosServices{
 async cadastrar_pedidos({data_da_compra, status}: CadPedidos){
    const resposta = await prismaClient.cadastroPedidos.create({
        data: {
            data_da_compra: data_da_compra,
            status: status
        }
    })
    return ({dados: 'Cadastro Efetuado com Sucesso'})
 }
 async consultar_pedidos(){
    const resposta = await prismaClient.cadastroPedidos.findMany({
        select: {
            data_da_compra: true,
            status: true
          

        }
    })
    return resposta 
 }
 
}

export { PedidosServices }