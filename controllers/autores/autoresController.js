import {
  listarTodosAutoresQuery,
  listarAutorPorIdQuery,
  crearAutorQuery,
  actualizarAutorQuery,
  eliminarAutorQuery
} from "../../db/autores/autoresQueries.js";

/**
 * Obtener todos los libros de la base de datos
 */
const listarTodosAutores = async (req, res) => {
  // Un bloque try-catch  sirve para validar si la peticion se obtiene o se devuelve un error
  // Try -> intentar
  // Catch -> capturar el error
  try {
    //  Ejecutar la consulta en la base de datos
    const libros = await listarTodosAutoresQuery();
    res.json(libros);
  } catch (error) {
    res.status(500).send(error);
  }
};

/**
 * Obtener el libro con el ID especificado en la query / url
 * @param {*} req 
 * @param {*} res 
 */

const listarAutorPorId = async (req, res) => { 
  try {
    //  Ejecutar la consulta en la base de datos
    const libro = await listarAutorPorIdQuery(req.params.id);
    res.json(libro);
  } catch (error) {
    res.status(500).send(error);
  }
};

/**
 * Crear un libro
 */
const crearAutor = async (req, res) => {
  console.log(req.body)
  try {
      const datosAutor = req.body;
      const resultado = await crearAutorQuery(datosAutor);
      res.json({ mensaje: 'Autor creado con éxito', id: resultado.insertId });
  } catch (error) {
      res.status(500).send(error);
  }
};

/**
 * Actualizar los datos de un libro
 */
const actualizarAutor = async (req, res) => {
  try {
      const id = req.params.id;
      const datosAutor = req.body;
      const resultado = await actualizarAutorQuery(id, datosAutor);
      if (resultado.affectedRows > 0) {
          res.json({ mensaje: 'Autor actualizado con éxito', id: id });
      } else {
          res.status(404).json({ mensaje: 'Autor no encontrado' });
      }
  } catch (error) {
      res.status(500).send(error);
  }
};

/**
 * Eliminar un libro
 */
const eliminarAutor = async (req, res) => {
  try {
      const id = req.params.id;
      const resultado = await eliminarAutorQuery(id);
      if (resultado.affectedRows > 0) {
          res.json({ mensaje: 'Autor eliminado con éxito' });
      } else {
          res.status(404).json({ mensaje: 'Autor no encontrado' });
      }
  } catch (error) {
      res.status(500).json({ mensaje: 'Error al eliminar el libro', error: error.message });
  }
};

export {
  listarTodosAutores,
  listarAutorPorId,
  crearAutor,
  actualizarAutor,
  eliminarAutor,
};
