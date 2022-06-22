const getOperations = async (req, res) => {
  const operations = await Operation.find().populate('user', 'name');
  console.log(operations);

  res.status(201).send({
    msg: 'Operations retrieved successfully',
    operations,
  });
};

const getOperationsByCategory = async (req, res) => {
  const { category } = req.body;

  const operationsByCategory = await Operation.find({
    category,
  });

  res.status(201).send({
    msg: 'Operations successfully retrieved by category',
    operationsByCategory,
  });
};

const createOperation = async (req, res) => {
  const operation = new Operation(req.body);

  try {
    operation.user = req.uid;

    const savedOperation = await operation.save();
    res.status(201).send({
      message: 'Operation created successfully',
      savedOperation,
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

    // { new: true } tells mongoose to return the updated document
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
