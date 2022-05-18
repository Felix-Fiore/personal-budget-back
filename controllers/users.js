const bcrypt = require('bcryptjs');

const User = require('../models/user-model');
const { generateToken } = require('../helpers/jwt');

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

        // Generate token
        const token = await generateToken(user._id, user.name);

        res.status(201).send({
            message: 'User created successfully',
            uid: user._id,
            name: user.name,
            token,
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

    // Generate token
    const token = await generateToken(user.id, user.name);

    res.status(201).send({
        message: 'User logged in successfully',
        uid: user.id,
        name: user.name,
        token,
    });
};

const revalidateJWK = async (req, res) => {
    const { uid, name } = req;

    // Generate token
    const token = await generateToken(uid, name);

    res.status(201).send({
        message: 'User revalidated successfully',
        uid,
        name,
        token,
    });
};

module.exports = {
    createUser,
    loginUser,
    revalidateJWK,
};
