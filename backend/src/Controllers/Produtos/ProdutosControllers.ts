import { Request, Response } from 'express'
import { ProdutosServices } from '../../Services/Produtos/ProdutosServices'


class ProdutosControllers {
  async cadastro_produtos(req: Request, res: Response) {
    const { nome, descricao, preco, categoria} = req.body  //recebe dados Front-end
    const produtosServices = new ProdutosServices()  //instancia classe serviços
    const resposta = await produtosServices.cadastrar_Produtos({
      nome,
      descricao,
      preco,
      categoria

    })  //envia dados serviços e aguarda a resposta
    return res.json(resposta) //enviara a resposta para o Front-end
  }
  async consultar_produtos(req: Request, res: Response){
    const produtosServices = new ProdutosServices()
    const resposta = await produtosServices.consultar_produtos()
    return res.json(resposta);
  }

}

export { ProdutosControllers }