import prismaClient from "../../prisma"

interface CadPedidos{
    data_da_compra: string
    status: string
    idFuncionarios: string
    idUsuarios: string
    idItensPedidos: string
}

class PedidosServices{
 async cadastrar_pedidos({data_da_compra, status, idFuncionarios, idUsuarios, idItensPedidos}: CadPedidos){
    const resposta = await prismaClient.cadastroPedidos.create({
        data: {
            data_da_compra: data_da_compra,
            status: status,
            idFuncionarios: idFuncionarios,
            idUsuarios: idUsuarios,
            idItensPedidos: idItensPedidos
        }
    })
    return ({dados: 'Cadastro Efetuado com Sucesso'})
 }
 async consultar_pedidos(){
    const resposta = await prismaClient.cadastroPedidos.findMany({
        select: {
            data_da_compra: true,
            status: true,
            idFuncionarios: true,
            
        
        }
    })
    return resposta 
 }
 
}

export { PedidosServices }