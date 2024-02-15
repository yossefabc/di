const { products } = require("../config/db.js");

const getAllProducts = (req, res) => {
  res.json(products);
};

const getOneProduct = (req, res) => {
  //   console.log(req.params);
  const { id } = req.params;
  const product = products.find((item) => item.id == id);
  if (!product) {
    return res.status(404).json({ message: "not found" });
  }
  res.json(product);
};

const search4Product = (req, res) => {
  console.log(req.query);
  const { name } = req.query;
  const filterproducts = products.filter((item) => {
    return item.name.toLowerCase().includes(name.toLowerCase());
  });
  if (filterproducts.length === 0) {
    return res.status(404).json({ message: "your search name not found" });
  }
  res.json(filterproducts);
};

const createNewProduct = (req, res) => {
  console.log(req.body);
  const { name, price } = req.body;
  const newProduct = { ...req.body, id: products.length + 1 };
  //   const newProduct = {
  //     id: products.length + 1,
  //     name: req.body.name,
  //     price: req.body.price,
  //   };
  products.push(newProduct);
  res.json(products);
};

const updateProduct = (req, res) => {
  const { id } = req.params;
  const { name, price } = req.body;

  const indx = products.findIndex((item) => item.id == id);
  // { id: 2, name: "iPad", price: 700 }
  products[indx] = { ...products[indx], name, price };

  //   products[indx].name = name;
  //   products[indx].price = price;

  res.json(products);
};

const deleteProduct = (req, res) => {
  const { id } = req.params;
  const indx = products.findIndex((item) => item.id == id);
  products.splice(indx, 1);
  res.json(products);
};

module.exports = {
  getAllProducts,
  getOneProduct,
  search4Product,
  createNewProduct,
  updateProduct,
  deleteProduct
}

 