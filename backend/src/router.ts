import {Router} from 'express';

import {UsuariosControllers} from './Controllers/Usuarios/usuariosControllers'

const router = Router();

router.post('/cadastroUsuarios', new UsuariosControllers().cadastro_usuarios);
router.get('/consultarUsuarios', new UsuariosControllers().consultar_usuarios)

export default router;