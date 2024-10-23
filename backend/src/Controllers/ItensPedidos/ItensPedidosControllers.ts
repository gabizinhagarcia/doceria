import { Request, Response } from 'express'
import { ItensPedidosServices } from '../../Services/ItensPedidos/ItensPedidosServices'


class ItensPedidosControllers {
  async cadastro_ItensPedidos(req: Request, res: Response) {
    const { quantidade, idProdutos} = req.body  //recebe dados Front-end
    const itensPedidosServices = new ItensPedidosServices()  //instancia classe serviços
    const resposta = await itensPedidosServices.cadastrar_ItensPedidos({
      quantidade,
      idProdutos
    
    })  //envia dados serviços e aguarda a resposta
    return res.json(resposta) //enviara a resposta para o Front-end
  }
  async consultar_ItensPedidos(req: Request, res: Response){
    const itensPedidosServices = new ItensPedidosServices()
    const resposta = await itensPedidosServices.consultar_ItensPedidos()
    return res.json(resposta);
  }

}

export { ItensPedidosControllers }