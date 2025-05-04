const express = require('express');
const mysql = require('mysql2/promise');
const reservaRoutes = require('./routes/reservaRoutes');

const app = express();
app.use(express.json());

// Pool de conexiones MySQL
const pool = mysql.createPool({
    host: 'reservas-db',
    user: 'root',
    password: 'password',
    database: 'cine'
});

// Rutas
app.use('/reservas', reservaRoutes(pool));

app.listen(8003, () => {
    console.log('Servicio de Reservas en puerto 8003');
});