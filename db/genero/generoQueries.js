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
const listarTodosGeneroQuery = () => {
    // Una promesa es una forma de que siempre se devuelva un resultado al quien llama (sea error o éxito)
    // Si la consulta no genera error, entonces resuelve/cumple la promesa con el resultado
    // Si hay algun error entonces rechaza la consulta e informa la razón 
    return new Promise((resolve, reject) => {
        config.query('SELECT * FROM genero', (err, filas) => {
            respuesta(err, filas, resolve, reject);
        });
    });
};

/**
 * Buscar un libro por su ID (llave primaria)
 */
const listarGeneroPorIdQuery = (id) => {
    return new Promise((resolve, reject) => {
        config.query('SELECT * FROM genero WHERE id_genero = ? LIMIT 1', [id], (err, filas) => {
            respuesta(err, filas, resolve, reject);
        });
    });
};


/**
 * Guardar un nuevo libro
 */
const crearGeneroQuery = async (genero) => {
    const { id_genero, generos} = genero;
    return new Promise((resolve, reject) => {
        const sql = 'INSERT INTO genero (id_genero, generos) VALUES (?, ?)';
        config.query(sql, [id_genero, genero], (err, resultado) => {
            respuesta(err, resultado, resolve, reject);
        });
    });
};

/**
 * Actualizar un libro por su ID
 */
const actualizarGeneroQuery = (id, genero) => {
    const { id_genero, genero_tipo } = genero;
    return new Promise((resolve, reject) => {
        const sql = 'UPDATE genero SET genero = ?, id_genero = ?, genero_tipo = ? WHERE id_genero = ?';
        config.query(sql, [nombre, fecha_de_publicacion, libro_Genero, id_libro_autor, id], (err, resultado) => {
            respuesta(err, resultado, resolve, reject);
        });
    });
};

/**
 * Eliminar un libro por su ID
 */
const eliminarGeneroQuery = (id) => {
    return new Promise((resolve, reject) => {
        const sql = 'DELETE FROM genero WHERE id_genero = ?';
        config.query(sql, [id], (err, resultado) => {
            respuesta(err, resultado, resolve, reject);
        });
    });
};

// Exportar todas las funciones definidas en este archivo
export {
    listarTodosGeneroQuery,
    listarGeneroPorIdQuery,
    crearGeneroQuery,
    actualizarGeneroQuery,
    eliminarGeneroQuery   
}
