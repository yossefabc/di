const express = require("express");

const { products } = require("../config/db.js");
const {
  getAllProducts,
  getOneProduct,
  search4Product,
  createNewProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/products.controller.js");

const router = express.Router();

router.get("/api/products", getAllProducts);
// get data from requst with params
router.get("/api/products/:id", getOneProduct);
// get data from reques with query ?name=aaa&email=bbb
router.get("/api/search", search4Product);
// get data from body => req.body
router.post("/api/products", createNewProduct);
// PUT  - update a product
router.put("/api/products/:id", updateProduct);
// delete a product - id in params
router.delete("/api/products/:id", deleteProduct);

module.exports = router;
