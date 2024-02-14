const fs = require('fs');

class ProductManager {
  constructor(filePath) {
    this.filePath = filePath;
    this.products = this.loadProducts();
  }

  loadProducts() {
    try {
      const data = fs.readFileSync(this.filePath, 'utf8');
      return JSON.parse(data);
    } catch (error) {
      console.error('Error al cargar los productos:', error.message);
      return [];
    }
  }

  getAllProducts(limit) {
    if (limit) {
      return this.products.slice(0, parseInt(limit));
    }
    return this.products;
  }

  getProductById(productId) {
    return this.products.find((product) => product.id === parseInt(productId));
  }
}

module.exports = ProductManager;
