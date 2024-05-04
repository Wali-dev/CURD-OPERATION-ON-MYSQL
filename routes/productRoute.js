const express = require("express")
const router = express.Router()
const productController= require("../controllers/productController")

// Routes for product CRUD operations
router.get('/', productController.getAllProducts);
router.get('/:id', productController.getProductById);
router.post('/', productController.addProduct);
router.put('/:id', productController.updateProduct);
router.delete('/:id', productController.deleteOneProduct)





module.exports = router;