const knex = require('knex');
const db = knex({
    client:'pg',
    connection:{
        host:'localhost',
        port: '5433',
        user:'postgres',
        database:'dvdrental',
        password:'yossef123',

    }
})