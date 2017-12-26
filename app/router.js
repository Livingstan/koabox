import Router from 'koa-router';
import User from './controller/UserController';

const router = new Router();

router.get("/", User.fetchAll);

// let router = Router({
//     prefix: 'api/'
// });

// router.resource('users', {
//     // GET /users 
//     index: User.fetchAll,

//     // GET /users/new 
//     new: (ctx, next) => {},

//     // POST /users 
//     create: User.store,

//     // GET /users/:user 
//     show: User.fetchBy,

//     // GET /users/:user/edit 
//     edit: User.edit,

//     // PUT /users/:user 
//     update: User.update,

//     // DELETE /users/:user 
//     remove: User.destroy
// });

export default router;