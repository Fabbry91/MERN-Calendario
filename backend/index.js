const express = require('express');
const cors = require('cors');
const { dbConnetion } = require('./database/config');
require('dotenv').config();

//Crear Servidor
const app = express();

//base de datos
dbConnetion();

//Cors
app.use(cors())

//Direcctorio publico
app.use(express.static('public'));

//Lectura y parseo del body
app.use(express.json());

//Rutas
// auth//crear ,login,renew
app.use('/api/auth', require('./routes/auth'));
//CRUD:
app.use('/api/events', require('./routes/events'));


//Escuchar peticion
app.listen(process.env.PORT, () => { console.log(`corriendo en el puerto ${process.env.PORT}`) });