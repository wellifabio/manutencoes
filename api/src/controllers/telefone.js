const con = require('../connect/mysql');

const readTelefones = (req, res) => {
    const sql = "SELECT * FROM telefone";
    con.query(sql, (err, result) => {
        if(err){
            res.json(err);
        }else{
            res.json(result);
        }
    });
}

const readTelefone = (req, res) => {
    const sql = "SELECT * FROM telefone WHERE matricula LIKE ?";
    con.query(sql,`%${[req.params.matricula]}%`, (err, result) => {
        if(err){
            res.json(err);
        }else{
            res.json(result);
        }
    });
}

module.exports = {
    readTelefones,
    readTelefone
}