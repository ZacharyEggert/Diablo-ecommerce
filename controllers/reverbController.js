const ReverbApiClient = require('@zacharyeggert/reverb-api').default;
// const fs = require('fs');

const db = require('../models');

module.exports = {
    // update the reverb table with the new reverb posts
    updateRecent: async function (req, res) {
        //fetch reverb posts from the reverb api
        const reverb = new ReverbApiClient(process.env.REVERB_API_KEY);
        res.json({ message: 'updating reverb table' });

        const listings = await reverb.getMyListingsRecent();
        console.log(`fetched ${listings.length} listings`);

        //update the reverb table with the new reverb posts
        //if the reverb post is already in the table, do nothing
        //if the reverb post is not in the table, add it to the table
        // fs.writeFileSync('reverbExports/listingsRecent.json', JSON.stringify(listings, null, 2));
        //return the updated reverb table
    },

    updateAll: async function (req, res) {
        //fetch reverb posts from the reverb api
        const reverb = new ReverbApiClient(process.env.REVERB_API_KEY);
        // res.json({message: 'updating reverb table'});

        console.debug('fetching listings');
        const listings = reverb.getMyListings();

        await db.Reverb.deleteMany({});
        db.Reverb.insertMany(await listings)
            .then(() => {
                res.json({ message: 'updated reverb table' });
            })
            .catch((err) => {
                console.error(err);
                res.json({ message: 'error updating reverb table' });
            });

        //update the reverb table with the new reverb posts
        //if the reverb post is already in the table, do nothing
        //if the reverb post is not in the table, add it to the table
        // fs.writeFileSync('reverbExports/listings.json', JSON.stringify(listings, null, 2));
        //return the updated reverb table
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
        db.Reverb.findById(req.params.id)
            .then((dbReverb) => res.status(200).json(dbReverb))
            .catch((err) => res.status(422).json(err));
    },

    importById: async function (req, res) {
        //find a single reverb post
        //return the reverb post
        db.Reverb.findById(req.params.id)
            .then(async (dbReverb) => {
                try {
                    await db.Item.findByIdAndDelete(req.params.id);
                    // console.debug(del);
                } catch (err) {
                    console.error(err);
                }
                const reverb = new ReverbApiClient(process.env.REVERB_API_KEY);
                let imported = await reverb.get(dbReverb._links.self.href);
                db.Item.create({ ...imported.data, _id: req.params.id })
                    .then(() => {
                        res.json({ message: 'imported reverb post' });
                    })
                    .catch((err) => {
                        console.error(err);
                        res.json({ message: 'error importing reverb post' });
                    });
            })
            .catch((err) => res.status(422).json(err));
    },
};
