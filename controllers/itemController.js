const db = require('../models');

module.exports = {
    // Create a new item
    create: function(req, res) {
        db.Item.create(req.body)
            .then(dbItem => res.json(dbItem))
            .catch(err => res.status(422).json(err));
    },
    // Find all items
    findAll: function(req, res) {
        db.Item.find(req.query)
            .then(dbItem => res.json(dbItem))
            .catch(err => res.status(422).json(err));
    },
    // Find one item by id
    findById: function(req, res) {
        db.Item.findById(req.params.id)
            .then(dbItem => res.json(dbItem))
            .catch(err => res.status(422).json(err));
    },
    // Update an item by id
    update: function(req, res) {
        db.Item.findOneAndUpdate({ _id: req.params.id }, req.body)
            .then(dbItem => res.json(dbItem))
            .catch(err => res.status(422).json(err));
    },
    // Delete an item by id
    remove: function(req, res) {
        db.Item.findById({ _id: req.params.id })
            .then(dbItem => dbItem.remove())
            .then(dbItem => res.json(dbItem))
            .catch(err => res.status(422).json(err));
    }
};