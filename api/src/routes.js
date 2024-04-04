const express = require('express');
const routes = express.Router();

const Veiculo = require('./controllers/veiculo');
const Funcionario = require('./controllers/funcionario');
const Telefone = require('./controllers/telefone');

routes.get('/', (req, res) => {
    res.json("API Manutenções 1.0");
});

routes.get('/veiculos', Veiculo.readVeiculos);
routes.get('/veiculos/:placa', Veiculo.readVeiculo);

routes.post('/funcionarios', Funcionario.createFuncionario);
routes.get('/funcionarios', Funcionario.readFuncionarios);
routes.get('/funcionarios/:matricula', Funcionario.readFuncionario);

routes.get('/telefones', Telefone.readTelefones);
routes.get('/telefones/:matricula', Telefone.readTelefone);

module.exports = routes;