const Operation = require('../models/operation-model');
var express = require('express');

const getOperations = async (req, res) => {
    const operations = await Operation.find().populate('user', 'name');
    console.log(operations);

    res.status(201).send({
        msg: 'Operations retrieved successfully',
        operations,
    });
};

const getOperationsByCategory = async (req, res) => {
    const { category } = req.body;

    const operationsByCategory = await Operation.find({
        category,
    });

    res.status(201).send({
        msg: 'Operations successfully retrieved by category',
        operationsByCategory,
    });
};

const getOperationById = async (req, res) => {
    const operationById = await Operation.findById(req.params.id);

    res.status(201).send({
        msg: 'Operation retrieved successfully',
        operationById,
    });
};

const createOperation = async (req, res) => {
    const operation = new Operation(req.body);

    try {
        operation.user = req.uid;

        const savedOperation = await operation.save();
        res.status(201).send({
            message: 'Operation created successfully',
            savedOperation,
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            message: 'Operation creation failed',
        });
    }
};

const updateOperation = (req, res) => {
    res.status(201).send({
        message: 'Operation updated successfully',
    });
};

const deleteOperation = (req, res) => {
    res.status(201).send({
        message: 'Operation deleted successfully',
    });
};

module.exports = {
    getOperations,
    getOperationById,
    getOperationsByCategory,
    createOperation,
    updateOperation,
    deleteOperation,
};
