const Operation = require('../models/operation-model');

const getOperations = (req, res) => {
    res.status(201).send("msg: 'Operations retrieved successfully'");
};

const getOperationById = (req, res) => {
    res.status(201).send("msg: 'Operation retrieved successfully'");
};

const getOperationsByCategory = (req, res) => {
    res.status(201).send(
        "msg: 'Operations successfully retrieved by category'"
    );
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

const updateOperation = (req, res) => {
    res.status(201).send({
        message: 'Operation updated successfully',
    });
};

const deleteOperation = (req, res) => {
    res.status(201).send({
        message: 'Operation deleted successfully',
    });
};

module.exports = {
    getOperations,
    getOperationById,
    getOperationsByCategory,
    createOperation,
    updateOperation,
    deleteOperation,
};
