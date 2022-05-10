const { Router } = require('express');
const {
    getOperations,
    getOperationById,
    createOperation,
    deleteOperation,
} = require('../controllers/operations');

const router = Router();

// all routes in here are starting with /api/operations
router.get('/', getOperations);

router.get('/:id', getOperationById);

router.post('/', createOperation);

router.delete('/:id', deleteOperation);

module.exports = router;
