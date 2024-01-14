const conexao = require('../config/db_config.js');
const {QueryTypes} = require('sequelize');

const Cliente = function (cliente) {
    this.nome = cliente.nome;
    this.fantasia = cliente.fantasia;
    this.email = cliente.email;
    this.url = cliente.url;
    this.cpf_cnpj = cliente.cpf_cnpj;
    this.rg = cliente.rg;
    this.orgao_rg = cliente.orgao_rg;
    this.data_emissao_rg = cliente.data_emissao_rg;
    this.sexo = cliente.sexo;
    this.inscricao_estadual = cliente.inscricao_estadual;
    this.inscricao_municipal = cliente.inscricao_municipal;
    this.tipo_pessoa = cliente.tipo_pessoa;
    this.data_cadastro = cliente.data_cadastro;
    this.logradouro = cliente.logradouro;
    this.numero = cliente.numero;
    this.complemento = cliente.complemento;
    this.cep = cliente.cep;
    this.bairro = cliente.bairro;
    this.cidade = cliente.cidade;
    this.uf = cliente.uf;
    this.telefone = cliente.telefone;
    this.celular = cliente.celular;
    this.contato = cliente.contato;
    this.codigo_ibge_cidade = cliente.codigo_ibge_cidade;
    this.codigo_ibge_uf = cliente.codigo_ibge_uf;
    this.fidelilade_aviso = cliente.fidelilade_aviso;
    this.fidelilade_quantidade = cliente.fidelilade_quantidade;
    this.fidelilade_valor = cliente.fidelilade_valor;
    this.fiado_valor_teto = cliente.fiado_valor_teto;
};

Cliente.ConsultarLista = async result => {
    const res = await conexao.query('Select * from cliente', {
        type: QueryTypes.SELECT
    });
    console.log('lista', res);

    result(null, res);
};

Cliente.ConsultarObjeto = async(Id, result) => {
    const res = await conexao.query('SELECT * FROM cliente where id = ' + Id, {
        type: QueryTypes.SELECT
    });

    if (res.length) {
        console.log('Objeto localizado', res[0]);
        result(null, res[0]);
        return;
    }
    
    // objeto não localizado
    result(null, {kind: "not_found"});
};

Cliente.Inserir = async(cliente, result) => {
    conexao.query('INSERT INTO cliente SET ?', cliente, (erro, res) => {
        if (erro) {
            console.log('erro:', erro);
            result(null, erro);
            return;
        }

        console.log('Objeto inserido', {id: res.insertId, ...cliente });
        result(null, {id: res.insertId, ...cliente });
    });
};

Cliente.Alterar = async(Id, cliente, result) => {
    conexao.query(
        'UPDATE cliente SET nome = ?, tipo = ?, site = ?, email = ?, cliente = ?, fornecedor = ?, '+
        'transportadora = ?, colaborador = ?, contador = ? where id = ?', 
        [cliente.nome, cliente.tipo, cliente.site, cliente.email, cliente.cliente, cliente.fornecedor,
            cliente.transportadora, cliente.colaborador, cliente.contador, Id], 
        (erro, res) => {
        if (erro) {
            console.log('erro:', erro);
            result(null, erro);
            return;
        }

        if (res.affectedRows == 0) {
            // objeto não localizado
            result(null, {kind: "not_found"});
            return;
        }

        console.log('Objeto alterado', {id: Id, ...cliente });
        result(null, {id: Id, ...cliente });
    });
};

Cliente.Excluir = async(Id, result) => {
    conexao.query('DELETE FROM cliente where id = ' + Id, (erro, res) => {
        if (erro) {
            console.log('erro:', erro);
            result(null, erro);
            return;
        }

        if (res.affectedRows == 0) {
            // objeto não localizado
            result(null, {kind: "not_found"});
            return;
        }

        console.log('Objeto excluído com o id = ', Id);
        result(null, res);
    });
};

module.exports = Cliente;