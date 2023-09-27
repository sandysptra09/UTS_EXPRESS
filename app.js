const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// definisi enviroment secara global (.env)
require('dotenv').config();

// convert data ke json
app.use(bodyParser.urlencoded({ extended : false }))
app.use(bodyParser.json())

// memanggil route kategori dan artikel
const appRoute = require('./src/routes');
app.use('/', appRoute);

// menjalankan server sesuai dengan port yang terdaftar di .env (8080)
app.listen(process.env.APP_PORT, () => {
    console.log(`Server Berjalan http://localhost:${process.env.APP_PORT}`);
});
