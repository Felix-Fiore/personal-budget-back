const bcrypt = require('bcryptjs');

const User = require('../models/user-model');

const createUser = async (req, res) => {
    const { name, email, password } = req.body;
    try {
        const user = new User({
            name,
            email,
            password,
        });

        // Encrypt password
        const salt = bcrypt.genSaltSync();
        user.password = bcrypt.hashSync(password, salt);

        await user.save();

        res.status(201).send({
            message: 'User created successfully',
        });
    } catch (error) {
        res.status(500).send({
            message: 'User creation failed',
        });
        console.log(error);
    }
};

const loginUser = async (req, res) => {
    const { email, password } = req.body;

    let user = await User.findOne({ email });

    try {
        if (!user) {
            return res.status(400).send({
                message: 'User not found',
            });
        }
    } catch (error) {
        res.status(500).send({
            message: 'User Login Failed',
        });
        console.log(error);
    }

    // Compare password
    const isPasswordValid = bcrypt.compareSync(password, user.password);

    if (!isPasswordValid) {
        return res.status(400).send({
            message: 'Invalid password',
        });
    }

    res.status(201).send({
        message: 'User logged in successfully',
    });
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

module.exports = {
    getUsers,
    getUserById,
    createUser,
    loginUser,
};
