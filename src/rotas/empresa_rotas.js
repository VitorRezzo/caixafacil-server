module.exports = app => {

    const empresaController = require('../controller/empresa_controller.js');

    // consultar a lista de objetos
    app.get('/empresa', empresaController.ConsultarLista);

    // consultar um objeto
    app.get('/empresa/:Id', empresaController.ConsultarObjeto);

    // inserir um objeto
    app.post('/empresa', empresaController.Inserir);

    // alterar um objeto
    app.put('/empresa/:Id', empresaController.Alterar);

    // excluir um objeto
    app.delete('/empresa/:Id', empresaController.Excluir);
};