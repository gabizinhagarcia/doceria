import { Request, Response } from 'express'
import { UsuariosServices } from '../../Services/Usuarios/UsusariosServices'

class UsuariosControllers {
  async cadastro_usuarios(req: Request, res: Response) {
    const { nome, cpf, email, password, cep, telefone} = req.body  //recebe dados Front-end
    const usuariosServices = new UsuariosServices()  //instancia classe serviços
    const resposta = await usuariosServices.cadastrar_usuarios({
      nome,
      cpf,
      email,
      password,
      cep,
      telefone

    })  //envia dados serviços e aguarda a resposta
    return res.json(resposta) //enviara a resposta para o Front-end
  }
  async consultar_usuarios(req: Request, res: Response){
    const usuariosServices = new UsuariosServices()
    const resposta = await usuariosServices.consultar_usuarios()
    return res.json(resposta);
  }

}

export { UsuariosControllers }