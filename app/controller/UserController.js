import mongoose from 'mongoose';

import {
    UserSchema
} from '../../database/schema/users';

const User = mongoose.model('User', UserSchema);

/**
 * POST a new user.
 */
export const store = async(ctx) => {
    let newUser = new User(ctx.request.body);

    await newUser.save((err, user) => {
        if (!newUser.first_name) ctx.throw(400, '.name required');
        if (err) return err;
        ctx.body = user;
    });
}

/**
 * GET all users.
 */
export const fetchAll = async(ctx) => {
    await User.find({}, (err, user) => {
        if (err) return err;
        ctx.body = user;
    });
}

/**
 * GET users by.
 */
export const fetchBy = async(ctx) => {
    await User.find({
        _id: ctx.params.user
    }, (err, user) => {
        if (err) return err;
        ctx.body = user;
    });
}

/**
 * GET user for edit.
 */
export const edit = async(ctx) => {
    await User.find({
        _id: ctx.params.user
    }, (err, user) => {
        if (err) return err;
        ctx.body = user;
    });
}

/**
 * PUT update the user.
 */
export const update = async(ctx) => {
    let id = {
        "_id": ctx.params.user
    };

    let request = ctx.request.body;

    await User.updateOne(id, request, (err, user) => {
        if (err) return err;
        ctx.body = user
    });
}

/**
 * DELETE users
 */
export const destroy = async(ctx) => {
    await User.remove({
        _id: ctx.params.user
    }, (err, user) => {
        if (err) return err;
        ctx.body = 'Deleted Successfully!'
    });
}

module.exports = {
    fetchAll,
    store,
    fetchBy,
    edit,
    update,
    destroy
};