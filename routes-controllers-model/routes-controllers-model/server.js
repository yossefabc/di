const express = require("express");
const { products } = require("./config/db.js");
const product_router = require("./routes/products.router.js");
const users_router = require("./routes/users.router.js");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(process.env.PORT || 3001, () => {
  console.log(`run on ${process.env.PORT || 3001}`);
});

app.use(product_router);
app.use(users_router);

/** Routes, Controllers, Models
 * server
 *    |_ config -> connection to db, connection to files
 *    |_ medels -> sql queries to db, i/o filesystem
 *    |_ controllers -> logic, req & res
 *    |_ routes -> Router -> "trafic control"
 *    |_ middleware ??
 */
