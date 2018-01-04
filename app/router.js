import Router from 'koa-router';
import jwt from '../config/jwt';
import User from './controller/UserController';
import auth from './http/auth';

// Public routes
const router = new Router();

router.post("/auth", auth);

// Secured routes
const securedRouter = new Router({
    prefix: '/api'
});
securedRouter.use(jwt.errorHandler()).use(jwt.jwt());

securedRouter.post("/users", User.store);
securedRouter.get("/users", User.fetchAll);
securedRouter.get("/users/:id", User.fetchBy);
securedRouter.get("/users/:id/edit", User.edit);
securedRouter.put("/users/:id", User.update);
securedRouter.del("/users/:id", User.destroy);
// securedRouter.all("/users", User.fetchAll);

module.exports = {
    router,
    securedRouter
};