import { Request, Response } from 'express'
import { UsuariosServices } from '../../Services/Usuarios/UsuariosServices'

class UsuariosControllers {
    async cadastrarUsuarios(req: Request, res: Response) {
        const { nome, email, password } = req.body
        const enviardadosservices = new UsuariosServices()
        const resposta = await enviardadosservices.cadastrarUsuarios({
            nome,
            email,
            password
        })
        return res.json(resposta)
    }

}

export { UsuariosControllers }