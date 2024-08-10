import {
    listarTodosUsuarioQuery,
    listarUsuarioPorIdQuery,
    crearUsuarioQuery,
    actualizarUsuarioQuery,
    eliminarUsuarioQuery
  } from "../../db/usuario/usuarioQueries.js";
  
  /**
   * Obtener todos los libros de la base de datos
   */
  const listarTodosUsuario = async (req, res) => {
    // Un bloque try-catch  sirve para validar si la peticion se obtiene o se devuelve un error
    // Try -> intentar
    // Catch -> capturar el error
    try {
      //  Ejecutar la consulta en la base de datos
      const usuario = await listarTodosUsuariosQuery();
      res.json(usuario);
    } catch (error) {
      res.status(500).send(error);
    }
  };
  
  /**
   * Obtener el libro con el ID especificado en la query / url
   * @param {*} req 
   * @param {*} res 
   */
  
  const listarUsuarioPorId = async (req, res) => { 
    try {
      //  Ejecutar la consulta en la base de datos
      const usuario = await listarUsuarioPorIdQuery(req.params.id);
      res.json(usuario);
    } catch (error) {
      res.status(500).send(error);
    }
  };
  
  /**
   * Crear un libro
   */
  const crearUsuario = async (req, res) => {
    console.log(req.body)
    try {
        const datosUsuario = req.body;
        const resultado = await crearUsuarioQuery(datosUsuario);
        res.json({ mensaje: 'Libro creado con éxito', id: resultado.insertId });
    } catch (error) {
        res.status(500).send(error);
    }
  };
  
  /**
   * Actualizar los datos de un libro
   */
  const actualizarUsuario = async (req, res) => {
    try {
        const id = req.params.id;
        const datosUsuario = req.body;
        const resultado = await actualizarUsuarioQuery(id, datosUsuario);
        if (resultado.affectedRows > 0) {
            res.json({ mensaje: 'Usuario actualizado con éxito', id: id });
        } else {
            res.status(404).json({ mensaje: 'Usuario no encontrado' });
        }
    } catch (error) {
        res.status(500).send(error);
    }
  };
  
  /**
   * Eliminar un libro
   */
  const eliminarUsuario = async (req, res) => {
    try {
        const id = req.params.id;
        const resultado = await eliminarUsuarioQuery(id);
        if (resultado.affectedRows > 0) {
            res.json({ mensaje: 'Usuario eliminado con éxito' });
        } else {
            res.status(404).json({ mensaje: 'Usuario no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al eliminar el Usuario', error: error.message });
    }
  };
  
  export {
    listarTodosUsuario,
    listarUsuarioPorId,
    crearUsuario,
    actualizarUsuario,
    eliminarUsuario,
  };
  