const operations = [
    {
        type: 'income',
        amount: '$200',
        date: 23 / 07 / 1997,
        description: 'A beatifull descrption',
    },
];

const getOperations = (req, res) => {
    res.send(operations);
};

const getOperationById = (req, res) => {
    const operation = operations.find(
        (operation) => operation.id === parseInt(req.params.id)
    );

    res.send(operation);
};

const createOperation = (req, res) => {
    const operation = req.body;

    operations.push(operation);

    res.send(operation);
};

const deleteOperation = (req, res) => {
    const operation = operations.find(
        (operation) => operation.id === parseInt(req.params.id)
    );

    if (!operation) {
        res.status(404).send('The operation with the given ID was not found.');
    } else {
        const index = operations.indexOf(operation);
        operations.splice(index, 1);
    }

    res.send(operation);
};

module.exports = {
    getOperations,
    getOperationById,
    createOperation,
    deleteOperation,
};
