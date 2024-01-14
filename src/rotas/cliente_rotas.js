module.exports = app => {

    const clienteController = require('../controller/cliente_controller.js');

    // consultar a lista de objetos
    app.get('/cliente', clienteController.ConsultarLista);

    // consultar um objeto
    app.get('/cliente/:Id', clienteController.ConsultarObjeto);

    // inserir um objeto
    app.post('/cliente', clienteController.Inserir);

    // alterar um objeto
    app.put('/cliente/:Id', clienteController.Alterar);

    // excluir um objeto
    app.delete('/cliente/:Id', clienteController.Excluir);
};