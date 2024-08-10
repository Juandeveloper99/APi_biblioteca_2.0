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
 * Carga la lista de autors
 */
const listarTodosAutoresQuery = () => {
    // Una promesa es una forma de que siempre se devuelva un resultado al quien llama (sea error o éxito)
    // Si la consulta no genera error, entonces resuelve/cumple la promesa con el resultado
    // Si hay algun error entonces rechaza la consulta e informa la razón 
    return new Promise((resolve, reject) => {
        config.query('SELECT * FROM autores', (err, filas) => {
            respuesta(err, filas, resolve, reject);
        });
    });
};

/**
 * Buscar un autor por su ID (llave primaria)
 */
const listarAutorPorIdQuery = (id) => {
    return new Promise((resolve, reject) => {
        config.query('SELECT * FROM autores WHERE id_autores = ? LIMIT 1', [id], (err, filas) => {
            respuesta(err, filas, resolve, reject);
        });
    });
};


/**
 * Guardar un nuevo autor
 */
const crearAutorQuery = async (autor) => {
    const { nombres } = autor;
    return new Promise((resolve, reject) => {
        const sql = 'INSERT INTO autores (nombres) VALUES (?)';
        config.query(sql, [nombres], (err, resultado) => {
            respuesta(err, resultado, resolve, reject);
        });
    });
};

/**
 * Actualizar un autor por su ID
 */
const actualizarAutorQuery = (id, autor) => {
    const { nombres } = autor;
    return new Promise((resolve, reject) => {
        const sql = 'UPDATE autores SET nombres = ? WHERE id_autores = ?';
        config.query(sql, [nombres, id], (err, resultado) => {
            respuesta(err, resultado, resolve, reject);
        });
    });
};

/**
 * Eliminar un autor por su ID
 */
const eliminarAutorQuery = (id) => {
    return new Promise((resolve, reject) => {
        const sql = 'DELETE FROM autores WHERE id_autores = ?';
        config.query(sql, [id], (err, resultado) => {
            respuesta(err, resultado, resolve, reject);
        });
    });
};

// Exportar todas las funciones definidas en este archivo
export {
    listarTodosAutoresQuery,
    listarAutorPorIdQuery,
    crearAutorQuery,
    actualizarAutorQuery,
    eliminarAutorQuery   
}
