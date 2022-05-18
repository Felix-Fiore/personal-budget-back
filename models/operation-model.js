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

// Change the name of the values __v and _id when we call the method toJSON()
operationSchema.method('toJSON', function () {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
});

module.exports = model('Operation', operationSchema);
