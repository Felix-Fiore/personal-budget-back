const { Router } = require('express');
const { getUsers, getUserById, createUser } = require('../controllers/users');
const router = Router();

// all routes in here are starting with /api/users
router.get('/', getUsers);

router.get('/:id', getUserById);

router.post('/', createUser);

module.exports = router;
