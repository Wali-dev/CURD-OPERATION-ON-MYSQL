const Sale = require("../models/saleModel")

const saleController = {
    getAllSales: async (req, res) => {
        try {
            const sales = await Sale.getAll();
            console.log(sales)
            // res.send(sales);
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

       
    }


module.exports = saleController;