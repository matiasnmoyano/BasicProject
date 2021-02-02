const bodyParser = require('body-parser');
const express = require('express');

const server = express();
server.use(bodyParser.json());
server.get('/',function(req,res){
    res.json('Estoy funcionando')
})
module.exports = { server };