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
  const { type, category, amount, date } = req.body;

  try {
    const newOperation = {
      type: type,
      category: category,
      amount: amount,
      date: date,
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

  try {
    const operation = await Operation.findById(operationId);

    if (!operation) {
      res.status(404).send({
        message: 'Operation not found',
      });
    }

    const newOperation = { ...req.body };

    const updatedOperation = await Operation.findByIdAndUpdate(
      operationId,
      newOperation,
      { new: true }
    );

    res.json({
      message: 'Operation updated successfully',
      updatedOperation,
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
    const operation = await Operation.findById(operationId);

    if (!operation) {
      res.status(404).send({
        message: 'Operation not found',
      });
    }

    await Operation.findByIdAndDelete(operationId);

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
