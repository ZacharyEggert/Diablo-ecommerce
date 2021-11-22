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

userSchema.methods.comparePassword = function (password: string, callback: (err: Error | undefined, same: boolean) => any) {
    // console.log('hash', userPassHash);
    bcrypt.compare(password, this.password, (err, isMatch) => {
        if (err) {
            callback(err, false);
        }
        callback(undefined, isMatch);
    });
};

const User = mongoose.model('User', userSchema);

export type UserDocument = mongoose.Document & {
    _id: string;
    email: string;
    password: string;
    __v: number;
    comparePassword: (password: string, callback: (err: Error | undefined, same: boolean) => any) => any;
}


export default User;
