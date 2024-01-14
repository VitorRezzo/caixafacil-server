const conexao = require('../config/db_config.js');
const {QueryTypes} = require('sequelize');

const Empresa = function (empresa) {
    this.razao_social = empresa.razao_social;
    this.nome_fantasia = empresa.nome_fantasia;
    this.cnpj = empresa.cnpj;
    this.inscricao_estadual = empresa.inscricao_estadual;
    this.inscricao_municipal = empresa.inscricao_municipal;
    this.tipo_regime = empresa.tipo_regime;
    this.crt = empresa.crt;
    this.data_constituicao = empresa.data_constituicao;
    this.tipo = empresa.tipo;
    this.email = empresa.email;
    this.aliquita_pis = empresa.aliquita_pis;
    this.aliquita_cofins = empresa.aliquita_cofins;
    this.logradouro = empresa.logradouro;
    this.numero = empresa.numero;
    this.complemento = empresa.complemento;
    this.cep = empresa.cep;
    this.bairro = empresa.bairro;
    this.cidade = empresa.cidade;
    this.uf = empresa.uf;
    this.fone = empresa.fone;
    this.contato = empresa.contato;
    this.codigo_ibge_cidade = empresa.codigo_ibge_cidade;
    this.codigo_ibge_uf = empresa.codigo_ibge_uf;
    this.logotipo = empresa.logotipo;
    this.registrado = empresa.registrado;
    this.natureza_juridica = empresa.natureza_juridica;
    this.email_pagamento = empresa.email_pagamento;
    this.simei = empresa.simei;
    this.data_registro = empresa.data_registro;
    this.hora_registro = empresa.hora_registro;
};

Empresa.ConsultarLista = async result => {
    const res = await conexao.query('Select * from empresa', {
        type: QueryTypes.SELECT
    });
    console.log('lista', res);

    result(null, res);
};

Empresa.ConsultarObjeto = async(Id, result) => {
    const res = await conexao.query('SELECT * FROM empresa where id = ' + Id, {
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

Empresa.Inserir = async(empresa, result) => {
    const res = await conexao.query('INSERT INTO empresa SET ?' + empresa, {
        type: QueryTypes.INSERT
    });
    
    console.log('Objeto inserido', {id: res.insertId, ...empresa });
    result(null, {id: res.insertId, ...empresa });

    /*conexao.query('INSERT INTO empresa SET ?', empresa, (erro, res) => {
        if (erro) {
            console.log('erro:', erro);
            result(null, erro);
            return;
        }

        console.log('Objeto inserido', {id: res.insertId, ...empresa });
        result(null, {id: res.insertId, ...empresa });
    });*/
};

Empresa.Alterar = async(Id, empresa, result) => {
    conexao.query(
        'UPDATE empresa SET nome = ?, tipo = ?, site = ?, email = ?, empresa = ?, fornecedor = ?, '+
        'transportadora = ?, colaborador = ?, contador = ? where id = ?', 
        [empresa.nome, empresa.tipo, empresa.site, empresa.email, empresa.empresa, empresa.fornecedor,
            empresa.transportadora, empresa.colaborador, empresa.contador, Id], 
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

        console.log('Objeto alterado', {id: Id, ...empresa });
        result(null, {id: Id, ...empresa });
    });
};

Empresa.Excluir = async(Id, result) => {
    conexao.query('DELETE FROM empresa where id = ' + Id, (erro, res) => {
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

module.exports = Empresa;