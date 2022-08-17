const { operations } = require('../models/Operations');
const users = require('../models/Users');

const getOperations = async (req, res) => {
  const operationsResult = await operations.findAll();

  res.status(201).send({
    msg: 'Operations retrieved successfully',
    operationsResult,
  });
};

const getOperationsByCategory = async (req, res) => {
  const { category } = req.body;

  let operationsByCategory = await operations.findAll({
    where: {
      category: category,
    },
  });

  res.status(201).send({
    msg: 'Operations successfully retrieved by category',
    operationsByCategory,
  });
};

const createOperation = async (req, res) => {
  const { amount, concept, date, type } = req.body;

  try {
    const newOperation = {
      amount: amount,
      concept: concept,
      date: date,
      type: type,
      uid: req.uid,
    };

    const operation = await operations.create(newOperation);

    res.status(201).send({
      msg: 'Operation created successfully',
      operation,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      message: 'Operation creation failed',
    });
  }
};

const updateOperation = async (req, res) => {
  const operationId = req.params.id;

  const { amount, concept, date } = req.body;

  try {
    const operation = await operations.findAll({
      where: {
        id: operationId,
      },
    });

    const newOperation = {
      amount,
      concept,
      date,
    };

    if (!operation) {
      res.status(404).send({
        message: 'Operation not found',
      });
    }

    await operations.update(newOperation, {
      where: {
        id: operationId,
      },
    });

    res.json({
      message: 'Operation updated successfully',
      operation,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      message: 'Operation update failed',
    });
  }
};

const deleteOperation = async (req, res) => {
  const operationId = req.params.id;

  try {
    const operation = await operations.findAll({
      where: {
        id: operationId,
      },
    });

    if (!operation) {
      res.status(404).send({
        message: 'Operation not found',
      });
    }

    await operations.destroy({
      where: {
        id: operationId,
      },
    });

    res.json({
      message: 'Operation deleted successfully',
    });
  } catch {
    res.status(500).send({
      message: 'Operation deletion failed',
    });
  }
};

module.exports = {
  getOperations,
  getOperationsByCategory,
  createOperation,
  updateOperation,
  deleteOperation,
};
