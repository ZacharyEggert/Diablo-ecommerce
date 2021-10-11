const db = require('../models');

module.exports = {
    // update the reverb table with the new reverb posts
    update: async function (req, res) {
        //fetch reverb posts from the reverb api

        //update the reverb table with the new reverb posts
        //if the reverb post is already in the table, do nothing
        //if the reverb post is not in the table, add it to the table

        //return the updated reverb table
        res.json();
    },

    // get all reverb posts
    findAll: async function (req, res) {
        db.Reverb.find(req.query)
            .then((dbReverb) => res.status(200).json(dbReverb))
            .catch((err) => res.status(422).json(err));
    },

    // get a single reverb post
    findById: async function (req, res) {
        //find a single reverb post
        //return the reverb post
        res.json();
    },
};
