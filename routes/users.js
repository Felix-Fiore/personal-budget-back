const { Router } = require('express');
const router = Router();

const users = [{ firstName: 'John', lastName: 'Doe', age: 30 }];

// all routes in here are starting with /api/users
router.get('/', (req, res) => {
    res.send(users);
});

router.get('/:id', (req, res) => {
    const user = users.find((user) => user.id === parseInt(req.params.id));
    if (!user) {
        res.status(404).send('The user with the given ID was not found.');
    } else {
        res.send(user);
    }
});

router.post('/', (req, res) => {
    const user = req.body;

    users.push(user);

    res.send(user);
});

module.exports = router;
