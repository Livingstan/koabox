'use strict';

// Framework
import koa from 'koa';
import chalk from 'chalk';
import logger from 'koa-logger';
import convert from 'koa-convert';
import bodyParser from 'koa-bodyparser';
import koaRes from 'koa-res';
import mongoose from 'mongoose';


// Packages
import config from './app';
import router from '../app/router';
import jwt from './jwt';

const init = () => {
    mongoose.Promise = global.Promise;

    return new Promise((resolve, reject) => {
        mongoose.connect(config.db.uri, config.db.options)
            .then(() => {
                // Initialize Koa
                const app = module.exports = new koa();
                resolve(app)
            })
            .catch(reject)
    })
};

export const start = () => {


    init()
        .then(app => {
            // register plugins
            app.use(jwt.errorHandler()).use(jwt.jwt());
            app.use(bodyParser());
            app.use(logger());
            app.use(convert(koaRes()));

            // bind routes
            app.use(router.middleware());

            app.listen(config.server.port, () => {
                // Create server URL
                let server = (process.env.NODE_ENV === 'secure' ? 'https://' : 'http://') + config.host + ':' + config.port
                // Logging initialization
                console.log('---------------------')
                console.log(chalk.green(config.app.title))
                console.log()
                console.log(chalk.green('Environment:     ' + process.env.NODE_ENV))
                console.log(chalk.green('Server:          ' + server))
                console.log(chalk.green('Database:        ' + config.db.uri))
                console.log(chalk.green('App version:     ' + config.app.version))
                console.log('---------------------')
            })
        })
        .catch(err => {
            console.log(config.server.port)
            console.error(err)
        })
};