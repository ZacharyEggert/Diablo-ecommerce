import mongoose from 'mongoose';
const Schema = mongoose.Schema;
import bcrypt from 'bcrypt';

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

userSchema.methods.comparePassword = function (password, callback) {
    // console.log('hash', userPassHash);
    bcrypt.compare(password, this.password, (err, isMatch) => {
        if (err) {
            callback(err);
        }
        callback(null, isMatch);
    });
};

const User = mongoose.model('User', userSchema);

export default User;
