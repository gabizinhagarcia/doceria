import { Router } from 'express'

//importações dos controllers
import { UsuariosControllers } from './Controllers/Usuarios/UsuariosControllers'
import { GruposControllers } from './Controllers/Grupos/GruposControllers'
import { LoginUsuariosControllers } from './Controllers/Login/LoginUsuariosControllers'

import { estaAutenticado } from './middleware/estaAutenticado'
const router = Router()

//rotas usuarios
router.post('/CadastrarUsuarios', estaAutenticado, new UsuariosControllers().cadastrarUsuarios)
router.get('/consultarUsuarios', estaAutenticado, new UsuariosControllers().consultarUsuarios)
router.delete('/ApagarUsuarios/:id', estaAutenticado, new UsuariosControllers().apagarUsuarios)
router.post('/ConsultarUsuariosUnico', estaAutenticado, new UsuariosControllers().consultarUsuariosUnico)
router.put('/AlterarDadosUsuarios', estaAutenticado, new UsuariosControllers().alterarDadosUsuarios)


//rotas grupos
router.post('/CadastrarGrupos', estaAutenticado, new GruposControllers().cadastrarGrupos)

//rotas de login
router.post('/LoginUsuarios', new LoginUsuariosControllers().loginUsuarios)
router.get('/VerificaToken', estaAutenticado, new LoginUsuariosControllers().verificaToken)

export default router