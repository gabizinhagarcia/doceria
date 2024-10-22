import { Request, Response } from 'express'
import { FuncionariosServices } from '../../Services/Funcionarios/FuncionariosServices'

class FuncionariosControllers {
  async cadastro_funcionarios(req: Request, res: Response) {
    const { nome, cpf, email, password, telefone, idHierarquia, } = req.body  //recebe dados Front-end
    const funcionariosServices = new FuncionariosServices()  //instancia classe serviços
    const resposta = await funcionariosServices.cadastrar_funcionarios({
      nome,
      cpf,
      email,
      password,
      telefone,
      idHierarquia
    

    })  //envia dados serviços e aguarda a resposta
    return res.json(resposta) //enviara a resposta para o Front-end
  }
  async consultar_funcionarios(req: Request, res: Response){
    const usuariosServices = new FuncionariosServices()
    const resposta = await usuariosServices.consultar_funcionarios()
    return res.json(resposta);
  }

}

export { FuncionariosControllers }