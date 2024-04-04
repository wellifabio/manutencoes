const con = require('../connect/mysql');

const createFuncionario = (req, res) => {
    const { matricula, nome, telefone } = req.body;
    if (telefone == null) {
        const sql = "INSERT INTO funcionario (matricula, nome) VALUES (?,?)";
        con.query(sql, [matricula, nome], (err, result) => {
            if (err) {
                if (err.code == "ER_DUP_ENTRY")
                    res.status(400).json("Matricula já cadastrada");
                else
                    res.status(500).json(err);
            } else {
                res.status(201).json(req.body);
            }
        });
    } else {
        const sql = "INSERT INTO funcionario (matricula, nome) VALUES (?,?)";
        con.query(sql, [matricula, nome], (err, result) => {
            if (err) {
                if (err.code == "ER_DUP_ENTRY")
                    res.status(400).json("Matricula já cadastrada");
                else
                    res.status(500).json(err);
            }
        });
        const sql2 = "INSERT INTO telefone (matricula, numero) VALUES (?,?)";
        con.query(sql2, [matricula, telefone], (err, result) => {
            if (err) {
                res.status(500).json(err);
            } else {
                res.status(201).json(req.body);
            }
        });
    }
}

const readFuncionarios = (req, res) => {
    const sql = "SELECT * FROM vw_funcionario";
    con.query(sql, (err, result) => {
        if (err) {
            res.json(err);
        } else {
            res.json(result);
        }
    });
}

const readFuncionario = (req, res) => {
    const sql = "SELECT * FROM vw_funcionario WHERE matricula LIKE ?";
    con.query(sql, `%${[req.params.matricula]}%`, (err, result) => {
        if (err) {
            res.json(err);
        } else {
            res.json(result);
        }
    });
}

module.exports = {
    createFuncionario,
    readFuncionarios,
    readFuncionario
}