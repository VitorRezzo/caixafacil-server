'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Clients', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.BIGINT
      },
      nome: {
        type: Sequelize.STRING,
      },
      fantasia: {
        type: Sequelize.STRING,
      },
      email: {
        type: Sequelize.STRING,
      },
      url: {
        type: Sequelize.STRING,
      },
      cpf_cnpj: {
        type: Sequelize.STRING,
      },
      rg: {
        type: Sequelize.STRING,
      },
      orgao_rg: {
        type: Sequelize.STRING,
      },
      data_emissao_rg: {
        type: Sequelize.DATE,
      },
      sexo: {
        type: Sequelize.STRING,
      },
      inscricao_estadual: {
        type: Sequelize.STRING,
      },
      inscricao_municipal: {
        type: Sequelize.STRING,
      },
      tipo_pessoa: {
        type: Sequelize.STRING,
      },
      data_cadastro: {
        type: Sequelize.DATE,
      },
      logradouro: {
        type: Sequelize.STRING,
      },
      numero: {
        type: Sequelize.STRING,
      },
      complemento: {
        type: Sequelize.STRING,
      },
      cep: {
        type: Sequelize.STRING,
      },
      bairro: {
        type: Sequelize.STRING,
      },
      cidade: {
        type: Sequelize.STRING,
      },
      uf: {
        type: Sequelize.STRING,
      },
      telefone: {
        type: Sequelize.STRING,
      },
      celular: {
        type: Sequelize.STRING,
      },
      contato: {
        type: Sequelize.STRING,
      },
      codigo_ibge_cidade: {
        type: Sequelize.INTEGER,
      },
      codigo_ibge_uf: {
        type: Sequelize.INTEGER,
      },
      fidelidade_aviso: {
        type: Sequelize.STRING,
      },
      fidelidade_quantidade: {
        type: Sequelize.INTEGER,
      },
      fidelidade_valor: {
        type: Sequelize.REAL,
      },
      fiado_valor_teto: {
        type: Sequelize.REAL,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Clients');
  }
};