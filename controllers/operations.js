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

const createOperation = (req, res) => {
    res.status(201).send({
        message: 'Operation created successfully',
    });
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
