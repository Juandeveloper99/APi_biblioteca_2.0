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
const listarTodosFavoritoQuery = () => {
    // Una promesa es una forma de que siempre se devuelva un resultado al quien llama (sea error o éxito)
    // Si la consulta no genera error, entonces resuelve/cumple la promesa con el resultado
    // Si hay algun error entonces rechaza la consulta e informa la razón 
    return new Promise((resolve, reject) => {
        config.query('SELECT * FROM favoritos', (err, filas) => {
            respuesta(err, filas, resolve, reject);
        });
    });
};

/**
 * Buscar un libro por su ID (llave primaria)
 */
const listarFavoritoPorIdQuery = (id) => {
    return new Promise((resolve, reject) => {
        config.query('SELECT * FROM favoritos WHERE id_favoritos = ? LIMIT 1', [id], (err, filas) => {
            respuesta(err, filas, resolve, reject);
        });
    });
};


/**
 * Guardar un nuevo libro
 */
const crearFavoritoQuery = async (favorito) => {
    const {id_favorito, id_libros_favoritos } = favorito;
    return new Promise((resolve, reject) => {
        const sql = 'INSERT INTO favoritos (id_favorito, id_libros_favoritos) VALUES (?, ?)';
        config.query(sql, [id_favorito, id_libros_favoritos], (err, resultado) => {
            respuesta(err, resultado, resolve, reject);
        });
    });
};

/**
 * Actualizar un libro por su ID
 */
const actualizarFavoritoQuery = (id, favorito) => {
    const {id_favorito, id_libros_favoritos} = favorito;
    return new Promise((resolve, reject) => {
        const sql = 'UPDATE SET  id_favoritos = ?, id_libros_favoritos = ? WHERE id_favoritos = ?';
        config.query(sql, [id_favorito, id_libros_favoritos], (err, resultado) => {
            respuesta(err, resultado, resolve, reject);
        });
    });
};

/**
 * Eliminar un libro por su ID
 */
const eliminarFavoritoQuery = (id) => {
    return new Promise((resolve, reject) => {
        const sql = 'DELETE FROM favoritos WHERE id_favoritos';
        config.query(sql, [id], (err, resultado) => {
            respuesta(err, resultado, resolve, reject);
        });
    });
};

// Exportar todas las funciones definidas en este archivo
export {
    listarTodosFavoritoQuery,
    listarFavoritoPorIdQuery,
    crearFavoritoQuery,
    eliminarFavoritoQuery   
}
