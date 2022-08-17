const { Router } = require('express');
const { check } = require('express-validator');
const { fieldValidator } = require('../middlewares/fieldsValidator');
const { jwtValidate } = require('../middlewares/jwtValidate');
const { date } = require('../helpers/date');
const {
  getOperations,
  createOperation,
  deleteOperation,
  updateOperation,
  getOperationsByCategory,
} = require('../controllers/operations');

const router = Router();

// all routes has to pass jwtValidate middleware
router.use(jwtValidate);

// all routes in here are starting with /api/operations
router.get('/', getOperations);

router.get('/category', getOperationsByCategory);

router.post(
  '/',
  [
    check('amount', 'Amount is required').not().isEmpty(),
    check('concept', 'Concept is required').not().isEmpty(),
    check('date', 'Date is required').not().isEmpty(),
    check('type', 'Type is required').not().isEmpty(),
    fieldValidator,
  ],
  createOperation
);

router.delete('/:id', deleteOperation);

router.put(
  '/:id',
  [
    check('amount', 'Amount is required').not().isEmpty(),
    check('concept', 'Concept is required').not().isEmpty(),
    check('date', 'Date is required').custom(date),

    fieldValidator,
  ],
  updateOperation
);

module.exports = router;
