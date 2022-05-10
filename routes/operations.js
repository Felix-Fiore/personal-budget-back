const { Router } = require('express');
const {
    getOperations,
    getOperationById,
    createOperation,
    deleteOperation,
    updateOperation,
} = require('../controllers/operations');

const router = Router();

// all routes in here are starting with /api/operations
router.get('/', getOperations);

router.get('/:id', getOperationById);

router.put('/:id', updateOperation);

router.post('/', createOperation);

router.delete('/:id', deleteOperation);

module.exports = router;
