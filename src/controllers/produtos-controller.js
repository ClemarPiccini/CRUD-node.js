const Produtos = require('../models/crud/produtos');

// Função para listar todos Produtos
async function getAllProdutos() {
  try {
    const produto = await Produtos.findAll();
    return produto.map(produto => produto.toJSON());
  } catch (error) {
    console.error('Não foi possível buscar os produtos: ', error);
  }
}

// Função para criar um novo Produto
async function createProduto(produto) {
  try {
    produto = await Produtos.create({ ...produto });
    return produto.toJSON();
  } catch (error) {
    console.error('Não foi possível criar o produto: ', error);
  }
}

// Função para atualizar um Produto
async function updateProduto(id, data) {
  try {
    const produto = await Produtos.findByPk(id);
    if (produto) {
      produto.nome = data.nome;
      produto.quantidade = data.quantidade;
      await produto.save();
      console.log('Produto atualizado: ', produto.toJSON());
    } else {
      console.log('Produto não encontrado');
    }
  } catch (error) {
    console.error('Não foi possível atualizar o Produto: ', error);
  }
}

// Função para deletar um Produto existente
async function deleteProduto(id) {
  try {
    const produto = await Produtos.findByPk(id);
    if (produto) {
      await produto.destroy();
      console.log('Produto deletado com sucesso');
    } else {
      console.log('Produto não encontrado');
    }
  } catch (error) {
    console.error('Não foi possível deletar o produto: ', error);
  }
}

module.exports = {createProduto, getAllProdutos, updateProduto, deleteProduto}
