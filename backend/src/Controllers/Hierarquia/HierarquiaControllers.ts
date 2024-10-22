import { Request, Response } from 'express'
import { HierarquiaServices } from '../../Services/Hierarquia/HierarquiaService'

class HierarquiaControllers {
  async cadastro_hierarquia(req: Request, res: Response) {
    const { nome} = req.body  //recebe dados Front-end
    const hierarquiaServices = new HierarquiaServices()  //instancia classe serviços
    const resposta = await hierarquiaServices.cadastrar_Hierarquia({
      nome
    
    })  //envia dados serviços e aguarda a resposta
    return res.json(resposta) //enviara a resposta para o Front-end
  }
  async consultar_hierarquia(req: Request, res: Response){
    const hierarquiaServices = new HierarquiaServices()
    const resposta = await hierarquiaServices.consultar_hierarquia()
    return res.json(resposta);
  }

}

export { HierarquiaControllers }