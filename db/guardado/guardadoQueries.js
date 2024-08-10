import config from '../../config.js';


// Helper function to handle query results
const respuesta = (err, result, resolve, reject) => {
    if (err) {
        console.log(err);
        reject(err);
    } else {
        resolve(result);
    }
};
/**
 * Carga la lista de libros
 */
const listarTodosGuardadoQuery = () => {
    // Una promesa es una forma de que siempre se devuelva un resultado al quien llama (sea error o éxito)
    // Si la consulta no genera error, entonces resuelve/cumple la promesa con el resultado
    // Si hay algun error entonces rechaza la consulta e informa la razón 
    return new Promise((resolve, reject) => {
        config.query('SELECT * FROM guardados', (err, filas) => {
            respuesta(err, filas, resolve, reject);
        });
    });
};

/**
 * Buscar un libro por su ID (llave primaria)
 */
const listarGuardadoPorIdQuery = (id) => {
    return new Promise((resolve, reject) => {
        config.query('SELECT * FROM guardados WHERE id_guardados = ? LIMIT 1', [id], (err, filas) => {
            respuesta(err, filas, resolve, reject);
        });
    });
};


/**
 * Guardar un nuevo libro
 */
const crearGuardadoQuery = async (guardado) => {
    const {id_guardados, id_libros_guardados } = guardado;
    return new Promise((resolve, reject) => {
        const sql = 'INSERT INTO guardados (id_guardados, id_libros_guardados) VALUES (?, ?)';
        config.query(sql, [id_guardados, id_libros_guardados], (err, resultado) => {
            respuesta(err, resultado, resolve, reject);
        });
    });
};

/**
 * Actualizar un libro por su ID
 */
const actualizarGuardadoQuery = (id, guardados) => {
    const {id_guardados, id_libros_guardados} = guardados;
    return new Promise((resolve, reject) => {
        const sql = 'UPDATE SET  id_guardados = ?, id_libros_guardados = ? WHERE id_guardados = ?';
        config.query(sql, [id_guardados, id_libros_guardados], (err, resultado) => {
            respuesta(err, resultado, resolve, reject);
        });
    });
};

/**
 * Eliminar un libro por su ID
 */
const eliminarGuardadoQuery = (id) => {
    return new Promise((resolve, reject) => {
        const sql = 'DELETE FROM guardados WHERE id_guardados';
        config.query(sql, [id], (err, resultado) => {
            respuesta(err, resultado, resolve, reject);
        });
    });
};

// Exportar todas las funciones definidas en este archivo
export {
    listarTodosGuardadoQuery,
    listarGuardadoPorIdQuery,
    crearGuardadoQuery,
    actualizarGuardadoQuery,
    eliminarGuardadoQuery   
}
