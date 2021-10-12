const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        index: { unique: true },
    },
    password: {
        type: String,
        required: true,
    },
});

userSchema.pre('save', function (next) {
    const user = this;
    if (!user.isModified('password')) {
        return next();
    }
    bcrypt.hash(user.password, 10, (err, hash) => {
        if (err) {
            return next(err);
        }
        user.password = hash;
        next();
    });
});

userSchema.methods.comparePassword = (password) => {
    bcrypt.compare(password, this.password, (err, isMatch) => {
        if (err) {
            return err;
        }
        return isMatch;
    });
};

const User = mongoose.model('User', userSchema);

module.exports = User;
