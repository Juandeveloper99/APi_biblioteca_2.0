import { Router } from 'express';
import verifyToken from '../middleware.js';
import {
    listarTodosGuardado,
    listarGuardadoPorId,
    eliminarGuardado

} from '../../controllers/guardado/guardadoController.js';

const guardadoRouter = Router();

guardadoRouter.use(verifyToken);

guardadoRouter.get('/', listarTodosGuardado);
guardadoRouter.get('/:id', listarGuardadoPorId);
guardadoRouter.delete('/:id', eliminarGuardado);

export default guardadoRouter;
