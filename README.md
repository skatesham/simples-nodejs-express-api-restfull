# Messagem RESTful API com NODEJS Express e MongoDB
O servidor é uma API RESTful para mensagens. Esse persiste mensagem em um banco de dados MongoDB com biblioteca mongoose que retorna JSON das mensagens. Como é uma API RESTful disponibiliza rotas para acesso as mensagens.

## Métodos HTTP, Rotas e descrições
> GET ('/messages) para buscar todas mensagens;
> POST ('/messages) para criar mensagem;
> GET ('/messages/:msgId') para acessar uma mensagem;
> PUT ('/messages/:msgId') para criar ou atualizar (upsert) um mensagem;
> DELETE ('/messages/:msgId') para remover uma mensagem;

[Tutorial Utilizado](https://medium.com/mackmobile/criando-um-web-service-restful-usando-node-js-7c00d8f16a4a)