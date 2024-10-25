import { Request, Response} from 'express'
import { LoginUsuariosServices } from '../../Services/LoginUsuarios/LonginUsuariosServices'


class LoginUsuariosControllers{
async login_usuarios(req: Request, res: Response){
    const { email, password } = req.body
    const loginUsuariosServices = new LoginUsuariosServices()
    const resposta = await loginUsuariosServices.logi_usuarios({
        email, password
    })
    return res.json (resposta)
}
}
 
export { LoginUsuariosControllers }