const { Router } = require('express');
const { check } = require('express-validator');
const { fieldValidator } = require('../middlewares/fieldsValidator');
const {
    getOperations,
    getOperationById,
    createOperation,
    deleteOperation,
    updateOperation,
    getOperationsByCategory,
} = require('../controllers/operations');

const router = Router();

// all routes in here are starting with /api/operations
router.get('/', getOperations);

router.get('/:id', getOperationById);

router.get('/', getOperationsByCategory);

router.put(
    '/:id',
    [
        check('category', 'Category is required').not().isEmpty(),
        check('amount', 'Amount is required').not().isEmpty(),
        check('date', 'Date is required').not().isEmpty(),
        check('description', 'Description is required').not().isEmpty(),
        fieldValidator,
    ],
    updateOperation
);

router.post(
    '/',
    [
        check('type', 'Type is required').not().isEmpty(),
        check('category', 'Category is required').not().isEmpty(),
        check('amount', 'Amount is required').not().isEmpty(),
        check('date', 'Date is required').not().isEmpty(),
        check('description', 'Description is required').not().isEmpty(),
        fieldValidator,
    ],
    createOperation
);

router.delete('/:id', deleteOperation);

module.exports = router;
