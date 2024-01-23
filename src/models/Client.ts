import {
    Model,
    DataTypes,
    InferAttributes,
    InferCreationAttributes,
  } from "sequelize";
  import  sequelize  from "../config/SequelizeConfig";
  
  class Client extends Model<InferAttributes<Client>, InferCreationAttributes<Client>> {
   declare id: number;
   declare nome: string;
   declare fantasia: string;
   declare email: string;
   declare url: string;
   declare cpf_cnpj: string;
   declare rg: string;
   declare orgao_rg: string;
   declare data_emissao_rg: Date;
   declare sexo: string;
   declare inscricao_estadual: string;
   declare inscricao_municipal: string;
   declare tipo_pessoa: string;
   declare data_cadastro: Date;
   declare logradouro: string;
   declare numero: string;
   declare complemento: string;
   declare cep: string;
   declare bairro: string;
   declare cidade: string;
   declare uf: string;
   declare telefone: string;
   declare celular: string;
   declare contato: string;
   declare codigo_ibge_cidade: number;
   declare codigo_ibge_uf: number;
   declare fidelidade_aviso: string;
   declare fidelidade_quantidade: number;
   declare fidelidade_valor: number;
   declare fiado_valor_teto: number;
  }
  
  Client.init({
   id: {
     type: DataTypes.BIGINT,
     allowNull: false,
     autoIncrement: true,
     primaryKey: true,
   },
   nome: {
     type: DataTypes.STRING,
   },
   fantasia: {
     type: DataTypes.STRING,
   },
   email: {
     type: DataTypes.STRING,
   },
   url: {
     type: DataTypes.STRING,
   },
   cpf_cnpj: {
     type: DataTypes.STRING,
   },
   rg: {
     type: DataTypes.STRING,
   },
   orgao_rg: {
     type: DataTypes.STRING,
   },
   data_emissao_rg: {
     type: DataTypes.DATE,
   },
   sexo: {
     type: DataTypes.STRING,
   },
   inscricao_estadual: {
     type: DataTypes.STRING,
   },
   inscricao_municipal: {
     type: DataTypes.STRING,
   },
   tipo_pessoa: {
     type: DataTypes.STRING,
   },
   data_cadastro: {
     type: DataTypes.DATE,
   },
   logradouro: {
     type: DataTypes.STRING,
   },
   numero: {
     type: DataTypes.STRING,
   },
   complemento: {
     type: DataTypes.STRING,
   },
   cep: {
     type: DataTypes.STRING,
   },
   bairro: {
     type: DataTypes.STRING,
   },
   cidade: {
     type: DataTypes.STRING,
   },
   uf: {
     type: DataTypes.STRING,
   },
   telefone: {
     type: DataTypes.STRING,
   },
   celular: {
     type: DataTypes.STRING,
   },
   contato: {
     type: DataTypes.STRING,
   },
   codigo_ibge_cidade: {
     type: DataTypes.INTEGER,
   },
   codigo_ibge_uf: {
     type: DataTypes.INTEGER,
   },
   fidelidade_aviso: {
     type: DataTypes.STRING,
   },
   fidelidade_quantidade: {
     type: DataTypes.INTEGER,
   },
   fidelidade_valor: {
     type: DataTypes.REAL,
   },
   fiado_valor_teto: {
     type: DataTypes.REAL,
   },
  },
    {
      sequelize,
      modelName: "cliente",
    },
  );
  
  export default Client;