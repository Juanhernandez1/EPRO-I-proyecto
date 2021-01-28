import createError from 'http-errors';
import express, { json, urlencoded } from 'express';
// // import { join } from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
// * Controlador de errores
import ErrorServer from './errors';

import indexRouter from './routes/index';
import usersRouter from './routes/users';

/**
 * * Se utiliza express-generator
 * * El Cual Contiene Algunas Configuraciones Predeterminadas
 * ! de las cuales se eliminan las que no se están usando
 */
const app = express();

/**
 * ? Motor de Visualización
 * // app.set('views', join(__dirname, 'views'));
 * // app.set('view engine', 'jade');
 */

app.use(logger('dev'));
app.use(json());
app.use(urlencoded({ extended: false }));
app.use(cookieParser());

/**
 * ? Ubicación de las Vistas que Cargaría el Motor de Visualización
 * // // app.use(express.static(path.join(__dirname, "public")));
 */

/**
 * * Creando Endpoint
 */
app.use('/', indexRouter);
app.use('/users', usersRouter);

/**
 * * Captura las solicitudes no encontradas en los Endpoint
 * * enviando un error 404 al controlador de errores
 */

app.use((req, res, next) => {
  next(createError(404));
});

/**
 * * Controlador de Errores
 */

app.use(ErrorServer);

export default app;
