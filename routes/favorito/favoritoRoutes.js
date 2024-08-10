import { Router } from 'express';
import verifyToken from '../middleware.js';
import {

    listarFavoritoPorId,
    eliminarFavorito,
    listarTodosFavorito
} from '../../controllers/favorito/favoritoController.js';
import { listarGuardadoPorId } from '../../controllers/guardado/guardadoController.js';

const favoritoRouter = Router();

favoritoRouter.use(verifyToken);

favoritoRouter.get('/', listarGuardadoPorId);
favoritoRouter.get('/', listarTodosFavorito);
favoritoRouter.delete('/:id', eliminarFavorito);

export default favoritoRouter;
