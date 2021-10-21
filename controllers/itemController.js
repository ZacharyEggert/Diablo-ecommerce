const { default: ReverbApiClient } = require('@zacharyeggert/reverb-api');
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
        res.json({ message: 'This May Take A While' });
        const ReverbClient = new ReverbApiClient(process.env.REVERB_API_KEY);
        db.Item.find({})
            .then((dbItems) => {
                db.Reverb.find({})
                    .then((reverbItems) => {
                        let itemIds = dbItems.map((item) => item._id);
                        return reverbItems.filter(
                            (reverbItem) => !itemIds.includes(reverbItem._id)
                        );
                    })
                    .then((reverbItems) => {
                        reverbItems.forEach(async (reverbItem) => {
                            await ReverbClient.get(reverbItem._links.self.href)
                                .then(async (response) => {
                                    response.status === 200 &&
                                        (await db.Item.create({
                                            ...response.data,
                                            _id: reverbItem._id,
                                        }));
                                })
                                .catch((err) => {
                                    console.error(err);
                                });
                        });
                    })
                    .catch((err) => {
                        console.error(err);
                    });
            })
            .catch((err) => {
                console.error(err);
            });
    },
    clearAndImportFromReverb: function (req, res) {
        res.json({ message: 'This Will Take A While' });
        const ReverbClient = new ReverbApiClient(process.env.REVERB_API_KEY);
        db.Reverb.find({}).then((reverbItems) => {
            db.Item.find({})
                .then((dbItems) => {
                    let reverbIds = reverbItems.map(
                        (reverbItem) => reverbItem._id
                    );
                    return dbItems.filter((dbItem) =>
                        reverbIds.includes(dbItem._id)
                    );
                })
                .then((dbItems) => {
                    dbItems.forEach(async (dbItem) => {
                        await dbItem.remove();
                    });
                })
                .then(() => {
                    reverbItems.forEach(async (reverbItem) => {
                        await ReverbClient.get(reverbItem._links.self.href)
                            .then(async (response) => {
                                response.status === 200 &&
                                    (await db.Item.create({
                                        ...response.data,
                                        _id: reverbItem._id,
                                    }));
                            })
                            .catch((err) => {
                                console.error(err);
                            });
                    });
                })
                .catch((err) => {
                    console.error(err);
                });
        });
    },
};
