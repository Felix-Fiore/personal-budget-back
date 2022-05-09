const { Router } = require('express');
const router = Router();

const operations = [
    {
        type: 'income',
        amount: '$200',
        date: 23 / 07 / 1997,
        description: 'A beatifull descrption',
    },
];

// all routes in here are starting with /api/operations
router.get('/', (req, res) => {
    res.send(operations);
});

router.get('/:id', (req, res) => {
    const operation = operations.find(
        (operation) => operation.id === parseInt(req.params.id)
    );

    res.send(operation);
});

router.post('/', (req, res) => {
    const operation = req.body;

    operations.push(operation);

    res.send(operation);
});

router.delete('/:id', (req, res) => {
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
});

module.exports = router;
