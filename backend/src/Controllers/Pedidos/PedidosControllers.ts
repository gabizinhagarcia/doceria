import { Request, Response } from 'express'
import { PedidosServices } from '../../Services/Pedidos/PedidosServices'

class PedidosControllers {
  async cadastro_pedidos(req: Request, res: Response) {
    const { data_da_compra, status, idFuncionarios, idUsuarios, idItensPedidos} = req.body  //recebe dados Front-end
    const pedidosServices = new PedidosServices()  //instancia classe serviços
    const resposta = await pedidosServices.cadastrar_pedidos({
     data_da_compra,
     status,
     idFuncionarios,
     idUsuarios,
     idItensPedidos

    })  //envia dados serviços e aguarda a resposta
    return res.json(resposta) //enviara a resposta para o Front-end
  }
  async consultar_pedidos(req: Request, res: Response){
    const pedidosServices = new PedidosServices()
    const resposta = await pedidosServices.consultar_pedidos()
    return res.json(resposta);
  }

}

export { PedidosControllers }