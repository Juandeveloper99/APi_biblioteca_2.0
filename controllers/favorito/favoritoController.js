import {
    listarTodosFavoritoQuery,
    listarFavoritoPorIdQuery,
    eliminarFavoritoQuery
  } from "../../db/favorito/favoritoQueries.js";
  
  /**
   * Obtener todos los libros de la base de datos
   */
  const listarTodosFavorito = async (req, res) => {
    // Un bloque try-catch  sirve para validar si la peticion se obtiene o se devuelve un error
    // Try -> intentar
    // Catch -> capturar el error
    try {
      //  Ejecutar la consulta en la base de datos
      const favorito = await listarTodosFavoritoQuery();
      res.json(crearFavoritoQuery);
    } catch (error) {
      res.status(500).send(error);
    }
  };
  
  /**
   * Obtener el libro con el ID especificado en la query / url
   * @param {*} req 
   * @param {*} res 
   */
  
  const listarFavoritoPorId = async (req, res) => { 
    try {
      //  Ejecutar la consulta en la base de datos
      const favorito = await listarFavoritoPorIdQuery(req.params.id);
      res.json(favorito);
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
  const eliminarFavorito = async (req, res) => {
    try {
        const id = req.params.id;
        const resultado = await eliminarFavoritoQuery(id);
        if (resultado.affectedRows > 0) {
            res.json({ mensaje: 'Favorito eliminado con éxito' });
        } else {
            res.status(404).json({ mensaje: 'Favorito no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al eliminar el Favorito', error: error.message });
    }
  };
  
  export {
    listarTodosFavorito,
    listarFavoritoPorId,
    eliminarFavorito,
  };
  