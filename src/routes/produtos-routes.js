const express = require('express');
const controller = require('../controllers/produtos-controller');

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const produto = await controller.createProduto(req.body);
    res.send(produto);
  } catch (error) {
    res.status(400).send({ 'message': error.parent.sqlMessage })
  }
});

router.put('/:id', async (req, res) => {
  try {
    const produto = await controller.updateProduto(req.params.id, req.body);
    res.send(produto);
  } catch (error) {
    res.status(400).send({ 'message': error.message });
  }
});

router.get('/', async (req, res) => {
  const produto = await controller.getAllProdutos();
  res.send(produto);
});

router.delete('/:id', async (req, res) => {
  try {
    const produto = await controller.deleteProduto(req.params.id);
    res.send(produto);
  } catch (error) {
    res.status(400).send({ 'message': error.parent.sqlMessage });
  }
});

module.exports = router;
