import mongoose from 'mongoose';

import {
    UserSchema
} from '../../database/schema/users';

const User = mongoose.model('User', UserSchema);

/**
 * POST a new user.
 */
export const store = async(ctx, next) => {
    let newUser = new User(ctx.request.body);
    ctx.body = ctx;

    await newUser.save((err, user) => {
        if (!newUser.first_name) ctx.throw(400, '.name required');
        if (err) return err;
        ctx.body = user;
    });
}

/**
 * GET all users.
 */
export const fetchAll = async(ctx, next) => {
    await User.find({}, (err, user) => {
        if (err) return err;
        ctx.body = user;
    });
}

/**
 * GET users by.
 */
export const fetchBy = async(ctx, next) => {
    await User.findOne({
        _id: ctx.params.id
    }, (err, user) => {
        if (err) return err;
        ctx.body = user;
    });
}

/**
 * GET user for edit.
 */
export const edit = async(ctx, next) => {
    await User.findOne({
        _id: ctx.params.id
    }, (err, user) => {
        if (err) return err;
        ctx.body = user;
    });
}

/**
 * PUT update the user.
 */
export const update = async(ctx, next) => {

    let request = ctx.request.body;

    await User.updateOne(ctx.params.id, request, (err, user) => {
        if (err) return err;
        ctx.body = user
    });
}

/**
 * DELETE users
 */
export const destroy = async(ctx, next) => {
    await User.remove({
        _id: ctx.params.id
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