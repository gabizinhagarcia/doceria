import { Request, Response } from 'express'
import { GruposServices } from '../../Services/Grupos/GruposServices'

class GruposControllers {
    async cadastrarGrupos(req: Request, res: Response) {
        const { nome } = req.body
        const enviardadosservices = new GruposServices()
        const resposta = await enviardadosservices.cadastrarGrupos({
            nome
           
        })
        return res.json(resposta)
    }

}

export { GruposControllers }