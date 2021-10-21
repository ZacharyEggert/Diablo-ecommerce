const { isValidObjectId } = require('mongoose');
const db = require('../models');

module.exports = {
    // Create a new item
    create: function (req, res) {
        db.Item.create(req.body)
            .then((dbItem) => res.json(dbItem))
            .catch((err) => {
                res.json(err);
                console.error(err);
            });
    },
    // Find all items
    findAll: function (req, res) {
        db.Item.find(req.query)
            .then((dbItem) => res.json(dbItem))
            .catch((err) => {
                res.json(err);
                console.error(err);
            });
    },
    // Find one item by id
    findById: function (req, res) {
        if (!isValidObjectId(req.params.id)) {
            return res.status(422).json({ error: 'Invalid ID' });
        }
        db.Item.findById(req.params.id)
            .then((dbItem) => res.json(dbItem))
            .catch((err) => {
                res.json(err);
                console.error(err);
            });
    },
    // Update an item by id
    update: function (req, res) {
        db.Item.findOneAndUpdate({ _id: req.params.id }, req.body)
            .then((dbItem) => res.json(dbItem))
            .catch((err) => {
                res.json(err);
                console.error(err);
            });
    },
    // Delete an item by id
    remove: function (req, res) {
        db.Item.findById({ _id: req.params.id })
            .then((dbItem) => dbItem.remove())
            .then((dbItem) => res.json(dbItem))
            .catch((err) => {
                res.json(err);
                console.error(err);
            });
    },
    importFromReverb: function (req, res) {
        res.json({ message: 'Not implemented' });
    },
    clearAndImportFromReverb: function (req, res) {
        res.json({ message: 'Not implemented' });
    },
};
