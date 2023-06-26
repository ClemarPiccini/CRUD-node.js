const Sequelize = require('sequelize');
const sequelize = require('../core');

const Produtos = sequelize.define('Produtos', {
  nome: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  quantidade: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
});

Produtos.sync();

module.exports = Produtos;
