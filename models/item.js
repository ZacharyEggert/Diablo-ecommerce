const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const itemSchema = new Schema({
    name: { type: String, required: true },
    type: { type: String, required: true },
    description: { type: String, required: true },

    boughtFrom: { type: String, required: true },
    boughtPrice: { type: Number, required: true },
    boughtDate: { type: Date, required: true },

    listed: { type: Boolean, default: false },
    listingPrice: { type: Number, required: false },
    listingDate: { type: Date, required: false },
    lowestPrice: { type: Number, required: false },

    soldTo: { type: String, required: false },
    soldDate: { type: Date, required: false },
    soldPrice: { type: Number, required: false },
    sold: { type: Boolean, required: false, default: false },
});

const Item = mongoose.model('Item', itemSchema);

module.exports = Item;
