const Product = require("../models/productModel")

const productController = {
    getAllProducts: async (req, res) => {
        try {
            const products = await Product.getAll();
            res.send(products);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    getProductById: async (req, res) => {
        const { id } = req.params;
        try {
            const product = await Product.getById(id);
            if (!product) {
                return res.status(404).json({ error: 'Product not found' });
            }
            res.send(product);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    addProduct: async (req, res) => {
        const { name, description, price, quantity } = req.body;
        try {
            const newProduct = await Product.create({ name, description, price, quantity });
            res.status(201).send(newProduct);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    updateProduct: async (req, res) => {
        const { id } = req.params;
        const { name, description, price, quantity } = req.body;
        try {
            const updatedProduct = await Product.update(id, { name, description, price, quantity });
            res.json(updatedProduct);
        } catch (error) {
            res.status(500).send({ error: error.message });
        }
    },

        deleteOneProduct: async (req, res) => {
            const { id } = req.params;
            try {
                await Product.delete(id);
                res.send({ message: 'Product deleted successfully' });
            } catch (error) {
                res.status(500).json({ error: error.message });
            }
        }
    }


module.exports = productController;