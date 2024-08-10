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
const listarTodosUsuarioQuery = () => {
    // Una promesa es una forma de que siempre se devuelva un resultado al quien llama (sea error o éxito)
    // Si la consulta no genera error, entonces resuelve/cumple la promesa con el resultado
    // Si hay algun error entonces rechaza la consulta e informa la razón 
    return new Promise((resolve, reject) => {
        config.query('SELECT * FROM usuarios', (err, filas) => {
            respuesta(err, filas, resolve, reject);
        });
    });
};

/**
 * Buscar un libro por su ID (llave primaria)
 */
const listarUsuarioPorIdQuery = (id) => {
    return new Promise((resolve, reject) => {
        config.query('SELECT * FROM usuarios WHERE id_usuario= ? LIMIT 1', [id], (err, filas) => {
            respuesta(err, filas, resolve, reject);
        });
    });
};


/**
 * Guardar un nuevo libro
 */
const crearUsuarioQuery = async (usuario) => {
    const {id_usuario, nombre, apellido, correo_electronico, telefono, password} = usuario;
    return new Promise((resolve, reject) => {
        const sql = 'INSERT INTO usuarios (id_usuario, nombre, apellido, correo_electronico, telefono, password) VALUES (?, ?, ?, ?, ?, ?,)';
        config.query(sql, [id_usuario, nombre, apellido, correo_electronico, telefono, password], (err, resultado) => {
            respuesta(err, resultado, resolve, reject);
        });
    });
};

/**
 * Actualizar un libro por su ID
 */
const actualizarUsuarioQuery = (id, usuario) => {
    const { id_usuario, nombre, apellido, correo_electronico, telefono, password } = usuario;
    return new Promise((resolve, reject) => {
        const sql = 'UPDATE usuarios SET id_usuario = ?, nombre = ?, apellido = ?, correo_electronico = ?, telefono = ?, password = ? WHERE id_usuario = ?';
        config.query(sql, [id_usuario, nombre, apellido, correo_electronico, telefono, password], (err, resultado) => {
            respuesta(err, resultado, resolve, reject);
        });
    });
};

/**
 * Eliminar un libro por su ID
 */
const eliminarUsuarioQuery = (id) => {
    return new Promise((resolve, reject) => {
        const sql = 'DELETE FROM usuarios WHERE id_usuario = ?';
        config.query(sql, [id], (err, resultado) => {
            respuesta(err, resultado, resolve, reject);
        });
    });
};

// Exportar todas las funciones definidas en este archivo
export {
    listarTodosUsuarioQuery,
    listarUsuarioPorIdQuery,
    crearUsuarioQuery,
    actualizarUsuarioQuery,
    eliminarUsuarioQuery   
}
