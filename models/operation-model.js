const { Schema, model } = require('mongoose');

const operationSchema = new Schema({
    type: {
        type: String,
        required: true,
    },

    category: {
        type: String,
        required: true,
    },

    amount: {
        type: Number,
        required: true,
    },

    date: {
        type: Date,
        required: true,
    },

    description: {
        type: String,
        required: true,
    },

    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
});

module.exports = model('Operation', operationSchema);
