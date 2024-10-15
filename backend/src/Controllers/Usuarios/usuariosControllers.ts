import {Request, Response} from 'express'
import { UsuariosServices } from '../../Services/Usuarios/UsusariosServices'

class UsuariosControllers {
    async cadastro_usuarios( req: Request, res: Response){
    const { nome, email, password } = req.body  //recebe dados Front-end
  const usuariosServices = new UsuariosServices()  //instancia classe serviços
  const resposta = await usuariosServices.cadastrar_usuarios({
    nome,
    email,
    password
  })  //envia dados serviços e aguarda a resposta
  return res.json(resposta) //enviara a resposta para o Front-end
    }

}
 
export { UsuariosControllers}