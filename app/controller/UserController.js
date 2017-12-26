import mongoose from 'mongoose';
import circularJson from 'circular-json';

import {
    UserSchema
} from '../../database/schema/users';

const User = mongoose.model('User', UserSchema);

/**
 * POST a new user.
 */
export const store = async function (ctx) {
    console.log('hi');
    let newUser = new User(ctx.request.body);

    let result = await newUser.save((err, user) => {
        if (!newUser.first_name) ctx.throw(400, '.name required');
        // if (err) return err;
        return user;
    });

    ctx.body = result;
}

export const getUser = async function (ctx) {
    ctx.body = circularJson.stringify(User.find({}, (err, user) => {
        // if (err) return err;
        return user
    }));
}