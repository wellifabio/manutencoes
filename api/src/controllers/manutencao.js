const con = require('../connect/mysql');

const createManutencao = (req, res) => {
    const { inicio, fim, descricao, matricula, placa } = req.body;
    if (fim != null) {
        const sql = "INSERT INTO manutencao (inicio,fim,descricao,matricula,placa) VALUES (?,?,?,?,?)";
        con.query(sql, [inicio, fim, descricao, matricula, placa], (err, result) => {
            if (err) {
                res.status(500).json(err);
            } else {
                res.status(201).json(req.body);
            }
        });
    } else {
        const sql = "INSERT INTO manutencao (inicio,descricao,matricula,placa) VALUES (?,?,?,?)";
        con.query(sql, [inicio, descricao, matricula, placa], (err, result) => {
            if (err) {
                res.status(500).json(err);
            } else {
                res.status(201).json(req.body);
            }
        });
    }
}

const readManutencoes = (req, res) => {
    const sql = "SELECT * FROM vw_manutencao";
    con.query(sql, (err, result) => {
        if (err) {
            res.json(err);
        } else {
            res.json(result);
        }
    });
}

const readManutencao = (req, res) => {
    const sql = "SELECT * FROM vw_manutencao WHERE id = ?";
    con.query(sql, `%${[req.params.id]}%`, (err, result) => {
        if (err) {
            res.json(err);
        } else {
            res.json(result);
        }
    });
}

const readManutencoesAtivas = (req, res) => {
    const sql = "SELECT * FROM vw_manutencao WHERE fim is null";
    con.query(sql, `%${[req.params.id]}%`, (err, result) => {
        if (err) {
            res.json(err);
        } else {
            res.json(result);
        }
    });
}

module.exports = {
    createManutencao,
    readManutencoes,
    readManutencao,
    readManutencoesAtivas
}