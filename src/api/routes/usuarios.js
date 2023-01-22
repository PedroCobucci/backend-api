const express = require('express');
const router = express.Router();
const mysql = require('../../config/mysql').pool

router.get('/',(req, res, next) => {
    res.status(200).send({
        mensagem: "usando get em rota"
    });
});

router.post('/',(req, res, next) => {
    const teste = {
        nome: req.body.nome
    };
    res.status(200).send({
        mensagem: "usando post em rota",
        obj: teste
    });
});

router.get('/:id_usuario', (req, res, next) => {
    const id = req.params.id_usuario;
    res.status(200).send({
        mensagem: `passando parametro: ${id}` 
    });        
});


module.exports = router;