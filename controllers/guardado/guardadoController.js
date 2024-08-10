import {
    listarTodosGuardadoQuery,
    listarGuardadoPorIdQuery,
    eliminarGuardadoQuery
  } from "../../db/guardado/guardadoQueries.js";
  
  /**
   * Obtener todos los libros de la base de datos
   */
  const listarTodosGuardado = async (req, res) => {
    // Un bloque try-catch  sirve para validar si la peticion se obtiene o se devuelve un error
    // Try -> intentar
    // Catch -> capturar el error
    try {
      //  Ejecutar la consulta en la base de datos
      const guardado = await listarTodosGuardadoQuery();
      res.json(crearGuardadoQuery);
    } catch (error) {
      res.status(500).send(error);
    }
  };
  
  /**
   * Obtener el libro con el ID especificado en la query / url
   * @param {*} req 
   * @param {*} res 
   */
  
  const listarGuardadoPorId = async (req, res) => { 
    try {
      //  Ejecutar la consulta en la base de datos
      const guardado = await listarGuardadoPorIdQuery(req.params.id);
      res.json(guardado);
    } catch (error) {
      res.status(500).send(error);
    }
  };
  
  /**
   * Crear un libro
   */

  
  /**
   * Actualizar los datos de un libro
   */
  
  /**
   * Eliminar un libro
   */
  const eliminarGuardado = async (req, res) => {
    try {
        const id = req.params.id;
        const resultado = await eliminarGuardadoQuery(id);
        if (resultado.affectedRows > 0) {
            res.json({ mensaje: 'Libro eliminado con éxito' });
        } else {
            res.status(404).json({ mensaje: 'Libro no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al eliminar el libro', error: error.message });
    }
  };
  
  export {
    listarTodosGuardado,
    listarGuardadoPorId,
    eliminarGuardado,
  };
  