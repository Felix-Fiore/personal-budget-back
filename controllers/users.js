const users = [];

const User = require('../models/user-model');

const createUser = async (req, res) => {
    const { name, email, password } = req.body;

    try {
        const user = new User({
            name,
            email,
            password,
        });

        await user.save();

        res.status(201).send({
            message: 'User created successfully',
        });
    } catch (error) {
        res.status(500).send({
            message: 'User creation failed',
        });
    }
};

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
