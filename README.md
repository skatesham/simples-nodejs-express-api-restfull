# Messagem RESTful API com NODEJS Express e MongoDB
O servidor é uma API RESTful para mensagens. Esse persiste mensagem em um banco de dados MongoDB com biblioteca mongoose que retorna JSON das mensagens. Como é uma API RESTful disponibiliza rotas para acesso as mensagens.

## Implantação
O servidor foi implantado com Heroku que disponibiliza esse no endereço https://message-simple-api-restful.herokuapp.com, 

## Métodos HTTP, Rotas e descrições
1. [GET ('/messages') para buscar todas mensagens](https://message-simple-api-restful.herokuapp.com/messages)
2. POST ('/messages') para criar mensagem;
3. GET ('/messages/:msgId') para acessar uma mensagem;
4. PUT ('/messages/:msgId') para criar ou atualizar (upsert) um mensagem;
5. DELETE ('/messages/:msgId') para remover uma mensagem;

[Tutorial](https://medium.com/mackmobile/criando-um-web-service-restful-usando-node-js-7c00d8f16a4a)
