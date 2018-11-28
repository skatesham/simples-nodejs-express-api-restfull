'use strict';

var mongoose = require('mongoose');
Message = mongoose.model('Messages');

exports.list_all_messages = function (req, res) {
    Message.find({}, function (err, msg) {
        if (err) {
            res.send(err);
        }
        res.json(msg);
    })
};

exports.create_a_message = function (req, res) {
    var new_msg = new Message(req.body);
    new_msg.save(function (err, msg) {
        if (err) {
            res.send(err);
        }
        res.json(msg);
    });
};

exports.read_a_message = function (req, res) {
    Message.findById(req.params.msgId, function (erro, msg) {
        if (err) {
            res.send(err);
        }
        res.json(msg);
    });
};

exports.update_a_message = function (req, res) {
    Message.findOneAndUpdate({ _id: req.params.msgId }, req.body, { new: true }, function (err, msg) {
        if (err) {
            res.send(err);
        }
        res.json(msg);
    });
};

exports.delete_a_message = function (req, res) {
    Message.remove({ _id: req.params.msgId }, function (err, msg) {
        if (err) {
            res.send(err)
        }
        res.json({ message: "Mensagem deletada com sucesso" });
    });
};

exports.welcome = function (req, res) {
    res.json({
        message: "Bem vindo a RESTfull API de Mensagens",
        descricao: "Modelo de mensagem {title:'', body: ''}",
        rotas: "As rotas são explicadas no objeto 'route' abaixo",
        routes: [
        {path: "/messages", descricao: "GET para buscar todos, POST para criar"},
        {path: "/messages", descricao: "GET para buscar, PUT para atualizar e DETELE para remover"}
        ]
    });
};