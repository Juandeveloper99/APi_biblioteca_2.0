import { Router } from 'express';
import verifyToken from '../middleware.js';
import {
    listarTodosGenero,
    listarGeneroPorId,
    crearGenero,
    actualizarGenero,
    eliminarGenero
} from '../../controllers/genero/generoController.js';

const GeneroRouter = Router();

GeneroRouter.use(verifyToken);

GeneroRouter.get('/', listarTodosGenero);
GeneroRouter.get('/:id', listarGeneroPorId);

GeneroRouter.post('/', crearGenero);
GeneroRouter.put('/:id', actualizarGenero);
GeneroRouter.delete('/:id', eliminarGenero);

export default GeneroRouter;
