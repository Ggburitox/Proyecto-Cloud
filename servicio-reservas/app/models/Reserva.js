module.exports = (pool) => {
    const crearReserva = async (usuarioId, funcionId) => {
        const [result] = await pool.execute(
            'INSERT INTO reservas (usuario_id, funcion_id) VALUES (?, ?)',
            [usuarioId, funcionId]
        );
        return result.insertId;
    };

    return { crearReserva };
};