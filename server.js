import logger from 'koa-logger';
import koaBody from 'koa-body';
import Koa from 'koa';

import mongoose from 'mongoose';

import router from './app/router';


const app = module.exports = new Koa();
var PORT = 3000;


// mongodb conntection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/db_cargoez', {
    useMongoClient: true
});

app.use(logger());
app.use(koaBody({
    jsonLimit: '1kb'
}));

// bind routes
app.use(router.middleware());

// start server
if (!module.parent) app.listen(PORT);