import { Router } from 'express'

//importações dos controllers
import { UsuariosControllers } from './Controllers/Usuarios/UsuariosControllers'
import { GruposControllers } from './Controllers/Grupos/GruposControllers'

const router = Router()

//rotas usuarios
router.post('/CadastrarUsuarios', new UsuariosControllers().cadastrarUsuarios)
router.get('/consultarUsuarios', new UsuariosControllers().consultarUsuarios)

//rotas grupos
router.post('/CadastrarGrupos', new GruposControllers().cadastrarGrupos)

export default router