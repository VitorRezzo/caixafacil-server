import {DbConfig} from './DbConfig';
import {Sequelize} from 'sequelize';

const sequelize = new Sequelize(DbConfig);

sequelize
  .authenticate()
  .then(() => {
    console.log('Conexão estabelecida com sucesso usando o Sequelize.');
  })
  .catch(err => {
    console.error('Problemas ao estabelecer a conexão usando o Sequelize:', err);
  });

  export default sequelize;