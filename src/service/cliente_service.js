conexao = require('../config/db_config.js');
const Cliente = require('../model/cliente.js');

class ClienteService {

    static ConsultarLista(result) {
        Cliente.findAll().then(listaBanco => {
            result(listaBanco, null);
        }).catch(function (erro) {
            result(null, erro);
        });
    }

    static ConsultarListaFiltroValor(filtro, result) {
        var sql = "select * from cliente where " + filtro.where;
        Cliente.sequelize
            .query(sql, {
                model: Cliente,
                mapToModel: true // para verificar os campos mapeados
            })
            .then(listaCliente => {
                result(listaCliente, null);
            })
            .catch(function (erro) {
                result(null, erro);
            });
    }

    static ConsultarObjeto(Id, result) {
        Cliente.findByPk(Id).then(cliente => {
            result(cliente, null);
        }).catch(function (erro) {
            result(null, erro);
        });
    }

    static Inserir(clienteJson, result) {
        Cliente.create(clienteJson).then(cliente => {
            result(cliente, null);
        }).catch(function (erro) {
            result(null, erro);
        });
    }

    static Alterar(clienteJson, result) {
        Cliente.update(clienteJson, {
            where: {
                id: clienteJson.id
            }
        }).then(registrosAtualizados => {
            result(registrosAtualizados[0], null);
        }).catch(function (erro) {
            result(null, erro);
        });
    }

    static Excluir(Id, result) {
        Cliente.destroy({
            where: {
                id: Id
            }
        }).then(registrosAtualizados => {
            result(registrosAtualizados[0], null);
        }).catch(function (erro) {
            result(null, erro);
        });
    }

}

module.exports = ClienteService;