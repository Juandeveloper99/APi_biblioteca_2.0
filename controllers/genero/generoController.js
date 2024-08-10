import {
  listarTodosGeneroQuery,
  listarGeneroPorIdQuery,
  crearGeneroQuery,
  actualizarGeneroQuery,
  eliminarGeneroQuery
} from "../../db/genero/generoQueries.js";

/**
 * Obtener todos los libros de la base de datos
 */
const listarTodosGenero = async (req, res) => {
  // Un bloque try-catch  sirve para validar si la peticion se obtiene o se devuelve un error
  // Try -> intentar
  // Catch -> capturar el error
  try {
    //  Ejecutar la consulta en la base de datos
    const genero = await listarTodosGeneroQuery();
    res.json(genero);
  } catch (error) {
    res.status(500).send(error);
  }
};

/**
 * Obtener el libro con el ID especificado en la query / url
 * @param {*} req 
 * @param {*} res 
 */

const listarGeneroPorId = async (req, res) => { 
  try {
    //  Ejecutar la consulta en la base de datos
    const genero = await listarGeneroPorIdQuery(req.params.id);
    res.json(genero);
  } catch (error) {
    res.status(500).send(error);
  }
};

/**
 * Crear un libro
 */
const crearGenero = async (req, res) => {
  console.log(req.body)
  try {
      const datosGenero = req.body;
      const resultado = await crearGeneroQuery(datosGenero);
      res.json({ mensaje: 'Genero creado con éxito', id: resultado.insertId });
  } catch (error) {
      res.status(500).send(error);
  }
};

/**
 * Actualizar los datos de un libro
 */
const actualizarGenero = async (req, res) => {
  try {
      const id = req.params.id;
      const datosGenero = req.body;
      const resultado = await actualizarGeneroQuery(id, datosGenero);
      if (resultado.affectedRows > 0) {
          res.json({ mensaje: 'Genero actualizado con éxito', id: id });
      } else {
          res.status(404).json({ mensaje: 'Genero no encontrado' });
      }
  } catch (error) {
      res.status(500).send(error);
  }
};

/**
 * Eliminar un libro
 */
const eliminarGenero = async (req, res) => {
  try {
      const id = req.params.id;
      const resultado = await eliminarGeneroQuery(id);
      if (resultado.affectedRows > 0) {
          res.json({ mensaje: 'Genero eliminado con éxito' });
      } else {
          res.status(404).json({ mensaje: 'Genero no encontrado' });
      }
  } catch (error) {
      res.status(500).json({ mensaje: 'Error al eliminar el Genero', error: error.message });
  }
};

export {
  listarTodosGenero,
  listarGeneroPorId,
  crearGenero,
  actualizarGenero,
  eliminarGenero,
};
