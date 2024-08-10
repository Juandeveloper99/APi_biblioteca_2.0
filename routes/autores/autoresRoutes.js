import { Router } from 'express';
import verifyToken from '../middleware.js';
import {
    listarTodosAutores,
    listarAutorPorId,
    crearAutor,
    actualizarAutor,
    eliminarAutor
} from '../../controllers/autores/autoresController.js';

const autoresRouter = Router();

autoresRouter.use(verifyToken);

autoresRouter.get('/', listarTodosAutores);
autoresRouter.get('/:id', listarAutorPorId);

autoresRouter.post('/', crearAutor);
autoresRouter.put('/:id', actualizarAutor);
autoresRouter.delete('/:id', eliminarAutor);

export default autoresRouter;
