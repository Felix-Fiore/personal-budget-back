const users = [];

const getUsers = async (req, res) => {
    res.status(201).send({
        message: 'Users retrieved successfully',
    });
};

const getUserById = async (req, res) => {
    res.status(201).send({
        message: 'User retrieved successfully',
    });
};

const createUser = async (req, res) => {
    res.status(201).send({
        message: 'User created successfully',
    });
};

const loginUser = async (req, res) => {
    res.status(201).send({
        message: 'User logged in successfully',
    });
};

module.exports = {
    getUsers,
    getUserById,
    createUser,
    loginUser,
};
