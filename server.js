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

// teste com parse-body
bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());


// Configurando MongoDB Driver
// mongodb URI: mongodb://mensagem:mensagem123@ds119394.mlab.com:19394/msgdb
mongoose.Promise = global.Promise;
var mongoDB = process.env.MONGODB_URI || 'mongodb://mensagem:mensagem123@ds119394.mlab.com:19394/msgdb'
// Para banco de dados local
//mongoose.connect('mongodb://localhost/msgdb', { useNewUrlParser: true }); // Json parser = { useNewUrlParser: true }

// Para Banco de dados externo do MLAB
mongoose.connect(mongoDB, { useNewUrlParser: true });

//Configurando Routes
routes(app);

// Iniciando  servidor
app.listen(port);
console.log('Mensagem RESTful API server disponível em: http://localhost:' + port+'/messages');
