import Router from 'koa-rest-router';
import {
    store,
    getUser
} from './controller/UserController';

let router = Router();

router.resource('users', {
    // GET /users 
    index: getUser,

    // GET /users/new 
    new: (ctx, next) => {},

    // POST /users 
    create: store,

    // GET /users/:user 
    show: (ctx, next) => {},

    // GET /users/:user/edit 
    edit: (ctx, next) => {},

    // PUT /users/:user 
    update: (ctx, next) => {},

    // DELETE /users/:user 
    remove: (ctx, next) => {}
});

async function load(ctx) {
    ctx.body = 'welcome';
}

export default router;