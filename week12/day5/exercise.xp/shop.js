const products= require('./products.js');



function findProduct(productName) {
    const product = products.find(item => item.name === productName);
    return product;
  }
  console.log(findProduct("Laptop"));
  console.log(findProduct("T-shirt"));
  console.log(findProduct("Sneakers"));