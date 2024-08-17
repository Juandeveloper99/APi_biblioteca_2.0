import express from 'express';
import cors from 'cors';

import dotenv from 'dotenv';
dotenv.config();

// Importar las rutas

import authRouter from "./routes/auth/authRoutes.js";

import autoresRouter from './routes/autores/autoresRoutes.js';
import librosRouter from './routes/libros/librosRoutes.js';
import GeneroRouter from "./routes/genero/generoRoutes.js";
import UsuarioRouter from './routes/usuario/usuarioRoutes.js';
import favoritoRouter from './routes/favorito/favoritoRoutes.js';
import GuardadosRouter from './routes/guardado/guardadoRoutes.js';
import topRouter from './routes/top/topRoutes.js';
import destacadosRouter from './routes/destacados/destacadosRoutes.js';
import recientesRouter from './routes/recientes/recientesRoutes.js';



// Crear la app de express
const app = express();

// Habilitar la captura de datos mediante post / formularios
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const corsOptions = {
    origin: process.env.CORS_ORIGIN,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    allowedHeaders: 'Content-Type,Authorization',
    exposedHeaders: 'Content-Length,X-Knowledge',
    credentials: true,
    preflightContinue: false,
    optionsSuccessStatus: 204 // some legacy browsers (IE11, various SmartTVs) choke on 204
};

// Apply CORS middleware globally
app.use(cors(corsOptions));

// Configurar el puerto
const port = 3000;

// Usar las rutas
app.use('/auth', authRouter); // AUTH
app.use('/libros', librosRouter); // LIBROS
app.use('/autores', autoresRouter); // AUTORES
app.use('/Guardado', GuardadosRouter);
app.use('/Genero', GeneroRouter);
app.use('/usuario', UsuarioRouter);
app.use('/favorito', favoritoRouter);
app.use('/top', topRouter);
app.use('destacados', destacadosRouter); // AUTORES
app.use('/recientes', recientesRouter); // LIBROS


// Levantar el servidor en el puerto 3000
app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto ${port}`);
});
