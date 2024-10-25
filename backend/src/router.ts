import {Router} from 'express';

import {UsuariosControllers} from './Controllers/Usuarios/usuariosControllers'
import { FuncionariosControllers } from './Controllers/Funcionarios/FuncionariosControllers';
import { ProdutosControllers } from './Controllers/Produtos/ProdutosControllers';
import { HierarquiaControllers } from './Controllers/Hierarquia/HierarquiaControllers';
import { PedidosControllers } from './Controllers/Pedidos/PedidosControllers';
import { ItensPedidosControllers } from './Controllers/ItensPedidos/ItensPedidosControllers';
import { LoginUsuariosControllers } from './Controllers/LonginUsuarios/LonginUsuariosContorllers';

const router = Router();

//usuarios
router.post('/cadastroUsuarios', new UsuariosControllers().cadastro_usuarios);
router.get('/consultarUsuarios', new UsuariosControllers().consultar_usuarios);

//funcionarios
router.post('/cadastroFuncionarios', new FuncionariosControllers().cadastro_funcionarios);
router.get('/consultarFuncionarios', new FuncionariosControllers().consultar_funcionarios);

//produtos
router.post('/cadastroProdutos', new ProdutosControllers().cadastro_produtos);
router.get('/consultarProdutos', new ProdutosControllers().consultar_produtos);

//hierarquia
router.post('/cadastroHierarquia', new HierarquiaControllers().cadastro_hierarquia);
router.get('/consultarHierarquia', new HierarquiaControllers().consultar_hierarquia);

//pedidos
router.post('/cadastroPedidos', new PedidosControllers().cadastro_pedidos);
router.get('/consultarPedidos', new PedidosControllers().consultar_pedidos);

//ItensPedidos
router.post('/cadastroItensPedidos', new ItensPedidosControllers().cadastro_ItensPedidos);
router.get('/consultarItensPedidos', new ItensPedidosControllers().consultar_ItensPedidos);

//login
router.post('/LoginUsuarios', new LoginUsuariosControllers().login_usuarios);

export default router;