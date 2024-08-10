import { Router } from 'express';
import verifyToken from '../middleware.js';
import {
    listarTodosUsuario,
    listarUsuarioPorId,
    crearUsuario,
    actualizarUsuario,
    eliminarUsuario
} from '../../controllers/usuario/usuarioController.js';

const UsuarioRouter = Router();

UsuarioRouter.use(verifyToken);

UsuarioRouter.get('/', listarTodosUsuario);
UsuarioRouter.get('/:id', listarUsuarioPorId);

UsuarioRouter.post('/', crearUsuario);
UsuarioRouter.put('/:id', actualizarUsuario);
UsuarioRouter.delete('/:id', eliminarUsuario);

export default UsuarioRouter;
