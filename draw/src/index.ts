import "module-alias/register";

import helmet from 'helmet';

import {Dialect} from 'sequelize/types';
import {Sequelize} from 'sequelize-typescript';

import {StartProjectInit} from "@tsclean/core";

import {AppContainer} from "@/application/app";
import {PORT, CONFIG_MYSQL} from "@/application/config/environment";
import {DrawModelMysql} from "@/infrastructure/driven-adapters/adapters/orm/sequelize/models/draw-mysql";

const sequelize = new Sequelize(CONFIG_MYSQL.database, CONFIG_MYSQL.user, CONFIG_MYSQL.password, {
    dialect: 'mysql',
    models: [DrawModelMysql],
});

async function syncDatabase() {
    try {
        await sequelize.sync({force: true});
        console.log('Tables synced');
    } catch (err) {
        console.log('Error syncing tables', err);
    }
}

async function authenticate() {
    try {
        await sequelize.authenticate()
        console.log('DB mysql');
    } catch (err) {
        console.log('Error authenticate', err);
    }
}

async function init() {
    console.log('testest', 1)
    await authenticate()
    console.log('testest', 2)

    await syncDatabase()
    console.log('testest', 3)
    const app = await StartProjectInit.create(AppContainer)
    app.use(helmet());
    await app.listen(PORT, () => console.log('Running on port ' + PORT))
}

init();
