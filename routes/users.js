const { Router } = require('express');
const {
    getUsers,
    getUserById,
    createUser,
    loginUser,
} = require('../controllers/users');
const { check } = require('express-validator');
const { fieldValidator } = require('../middlewares/fieldsValidator');

const router = Router();

// all routes in here are starting with /api/users
router.get('/', getUsers);

router.get('/:id', getUserById);

router.post(
    '/new',
    [
        check('name', 'Name is required').not().isEmpty(),
        check('email', 'Email is required').isEmail(),
        check('password', 'Password must have at least 5 characters').isLength({
            min: 5,
        }),
        fieldValidator,
    ],
    createUser
);

router.post(
    '/',
    [
        check('email', 'Email is required').isEmail(),
        check('password', 'Password must have at least 5 characters').isLength({
            min: 5,
        }),
        fieldValidator,
    ],
    loginUser
);

module.exports = router;
