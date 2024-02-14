const express = require('express');
const ProductManager = require('./path/to/ProductManager'); 

const app = express();
const PORT = 3000;

const productManager = new ProductManager('./path/to/productos.json'); 

app.use(express.json());

app.get('/products', (req, res) => {
  const { limit } = req.query;
  const products = productManager.getAllProducts(limit);
  res.json({ products });
});

app.get('/products/:pid', (req, res) => {
  const { pid } = req.params;
  const product = productManager.getProductById(pid);

  if (product) {
    res.json({ product });
  } else {
    res.status(404).json({ message: 'Producto no encontrado' });
  }
});

// Iniciamoooos
app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
