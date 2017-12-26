import Router from 'koa-router';
import User from './controller/UserController';

const router = new Router();

router.all("/users", User.fetchAll);
router.post("/users", User.store);
router.get("/users/:id", User.fetchBy);
router.get("/users/:id/edit", User.edit);
router.put("/users/:id", User.update);
router.del("/users/:id", User.destroy);

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