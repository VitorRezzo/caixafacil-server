const Cliente = require('../models/cliente.js');

conexao.authenticate();

// consultar a lista
exports.ConsultarLista = (req, res) => {
    Cliente.ConsultarLista((erro, dados) => {
        if (erro) {
            res.status(500).send({
                mensagem: "Ocorreu um erro na consulta (Cliente) - " + erro.message
            });
        }
        else{
            res.send(dados);
        }
    });
};

// consultar um objeto
exports.ConsultarObjeto = (req, res) => {
    Cliente.ConsultarObjeto(req.params.Id, (erro, dados) => {
        if (erro) {
            if (erro.kind === 'not_found') {
                res.status(404).send({
                    mensagem: "Cliente não localizado para o id: " + req.params.Id
                });    
            } else {
                res.status(500).send({
                    mensagem: "Erro ao consultar Cliente com o id: " + req.params.Id
                });
            }
        }
        else res.send(dados);
    });
};

// inserir um objeto
exports.Inserir = (req, res) => {
    //valida o conteúdo da requisição
    if (!req.body){
        res.status(400).send({
            mensagem: "Conteúdo não pode ser vazio."
        });    
    }

    // instanciar objeto a partir do JSON vindo na requisição
    var cliente = new Cliente(req.body);

    // salvar objeto no cliente de dados
    Cliente.Inserir(cliente, (erro, dados) => {
        if (erro) {
            res.status(500).send({
                mensagem: "Erro ao inserir Cliente - " + erro.message
            });
        }
        else {
          res.send(dados);
        }
    });
};

// alterar um objeto
exports.Alterar = (req, res) => {
    //valida o conteúdo da requisição
    if (!req.body){
        res.status(400).send({
            mensagem: "Conteúdo não pode ser vazio."
        });    
    }

    // instanciar objeto a partir do JSON vindo na requisição
    var cliente = new Cliente(req.body);

    // salvar objeto no cliente de dados
    Cliente.Alterar(req.params.Id, cliente, (erro, dados) => {
        if (erro) {
            if (erro.kind === 'not_found') {
                res.status(404).send({
                    mensagem: "Cliente não localizado para o id: " + req.params.Id
                });    
            } else {
                res.status(500).send({
                    mensagem: "Erro ao alterar Cliente com o id: " + req.params.Id
                });
            }
        }
        else res.send(dados);
    });
};

// excluir um objeto
exports.Excluir = (req, res) => {
    Cliente.Excluir(req.params.Id, (erro, dados) => {
        if (erro) {
            if (erro.kind === 'not_found') {
                res.status(404).send({
                    mensagem: "Cliente não localizado para o id: " + req.params.Id
                });    
            } else {
                res.status(500).send({
                    mensagem: "Erro ao excluir Cliente com o id: " + req.params.Id
                });
            }
        }
        else res.send({mensagem: "Registro excluído com sucesso!"});
    });
};