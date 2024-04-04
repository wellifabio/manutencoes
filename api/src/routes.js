const express = require('express');
const routes = express.Router();

const Veiculo = require('./controllers/veiculo');

routes.get('/', (req, res) => {
    res.json("API Manutenções 1.0");
});

// routes.post('/usuarios/login', Usuario.login);
// routes.post('/usuarios', Usuario.addUsuario);
routes.get('/veiculos', Veiculo.readVeiculos);
// routes.get('/usuarios/:id', Usuario.getUsuarios);
// routes.put('/usuarios', Usuario.updateUsuario);
// routes.delete('/usuarios/:id', Usuario.deleteUsuario);

// routes.post('/tarefas', Tarefa.addTarefa);
// routes.get('/tarefas', Tarefa.getTarefas);
// routes.get('/tarefas/:id', Tarefa.getTarefas);
// routes.get('/tarefas/status/:status', Tarefa.getTarefaStatus);
// routes.get('/tarefas/data/:data', Tarefa.getTarefaData);    
// routes.put('/tarefas', Tarefa.updateTarefa);
// routes.delete('/tarefas/:id', Tarefa.deleteTarefa);

module.exports = routes;