import { Router } from 'express'

//importações dos controllers
import { UsuariosControllers } from './Controllers/Usuarios/UsuariosControllers'
import { GruposControllers } from './Controllers/Grupos/GruposControllers'

const router = Router()

//criação das rotas de end point 
router.post('/CadastrarUsuarios', new UsuariosControllers().cadastrarUsuarios)

router.post('/CadastrarGrupos', new GruposControllers().cadastrarGrupos)

export default router