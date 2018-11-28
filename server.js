// Node server Express
var express = require('express');
// Biblioteca MongoDB Driver
mongoose = require('mongoose');
// Collection do MongoDB
Message = require('./api/models/msgModel');

// Routes do projeto
var routes = require('./api/routes/msgRoutes');

// Configurando Servidor
port = process.env.PORT || 3000;
app = express();


// Configurando MongoDB Driver
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/msgdb', { useNewUrlParser: true }); // Json parser = { useNewUrlParser: true }

//Configurando Routes
routes(app);

// Iniciando  servidor
app.listen(port);
console.log('Mensagem RESTful API server disponível em: http://localhost:' + port+'/messages');
