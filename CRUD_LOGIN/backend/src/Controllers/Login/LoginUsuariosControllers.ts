import { Request, Response } from "express";
import { LoginServices } from "../../Services/Login/LoginServices";

class LoginUsuariosControllers{
    async loginUsuarios(req: Request, res: Response){
        const { email, password} = req.body        
        const enviarDadosServices = new LoginServices()
        const resposta = await enviarDadosServices.loginUsuarios({
            email,
            password
        })
       return res.json(resposta)
    }

    async verificaToken(req: Request, res: Response){
        const id = req.usuarioId
        console.log(id)
    }
}

export {LoginUsuariosControllers}