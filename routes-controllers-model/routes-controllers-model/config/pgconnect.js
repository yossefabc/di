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

// console.log(db)

// db.select("id","name","price")
// .from("products")
// .then((rows) => {
//     console.log(rows);
// })
// .catch((err) => {
//     console.log(err);
// });

db("products")
.insert({name:"samsung s25",price:3000})
.then((result)=>{
    console.log(result);
})
.catch((err)=>{
    console.log(err);
})