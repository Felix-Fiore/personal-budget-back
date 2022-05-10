const users = [];

const getUsers = async (req, res) => {
    res.send(users);
};

const getUserById = async (req, res) => {
    const user = users.find((user) => user.id === parseInt(req.params.id));
    if (!user) {
        res.status(404).send('The user with the given ID was not found.');
    } else {
        res.send(user);
    }
};

const createUser = async (req, res) => {
    const user = req.body;

    users.push(user);

    res.send(user);
};

module.exports = {
    getUsers,
    getUserById,
    createUser,
};
