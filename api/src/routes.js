const express = require('express');
const routes = express.Router();

const Veiculo = require('./controllers/veiculo');
const Funcionario = require('./controllers/funcionario');
const Telefone = require('./controllers/telefone');
const Manutencao = require('./controllers/manutencao');

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

routes.post('/manutencoes', Manutencao.createManutencao);
routes.get('/manutencoes', Manutencao.readManutencoes);
routes.get('/manutencoes/:id', Manutencao.readManutencao);
routes.get('/ativas', Manutencao.readManutencoesAtivas);


module.exports = routes;