const Empresa = require('../model/empresa.js');

conexao.authenticate();

// consultar a lista
exports.ConsultarLista = (req, res) => {
    Empresa.ConsultarLista((erro, dados) => {
        if (erro) {
            res.status(500).send({
                mensagem: "Ocorreu um erro na consulta (Empresa) - " + erro.message
            });
        }
        else{
            res.send(dados);
        }
    });
};

// consultar um objeto
exports.ConsultarObjeto = (req, res) => {
    Empresa.ConsultarObjeto(req.params.Id, (erro, dados) => {
        if (erro) {
            if (erro.kind === 'not_found') {
                res.status(404).send({
                    mensagem: "Empresa não localizado para o id: " + req.params.Id
                });    
            } else {
                res.status(500).send({
                    mensagem: "Erro ao consultar Empresa com o id: " + req.params.Id
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
    var empresa = new Empresa(req.body);

    // salvar objeto no empresa de dados
    Empresa.Inserir(empresa, (erro, dados) => {
        if (erro) {
            res.status(500).send({
                mensagem: "Erro ao inserir Empresa - " + erro.message
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
    var empresa = new Empresa(req.body);

    // salvar objeto no empresa de dados
    Empresa.Alterar(req.params.Id, empresa, (erro, dados) => {
        if (erro) {
            if (erro.kind === 'not_found') {
                res.status(404).send({
                    mensagem: "Empresa não localizado para o id: " + req.params.Id
                });    
            } else {
                res.status(500).send({
                    mensagem: "Erro ao alterar Empresa com o id: " + req.params.Id
                });
            }
        }
        else res.send(dados);
    });
};

// excluir um objeto
exports.Excluir = (req, res) => {
    Empresa.Excluir(req.params.Id, (erro, dados) => {
        if (erro) {
            if (erro.kind === 'not_found') {
                res.status(404).send({
                    mensagem: "Empresa não localizado para o id: " + req.params.Id
                });    
            } else {
                res.status(500).send({
                    mensagem: "Erro ao excluir Empresa com o id: " + req.params.Id
                });
            }
        }
        else res.send({mensagem: "Registro excluído com sucesso!"});
    });
};