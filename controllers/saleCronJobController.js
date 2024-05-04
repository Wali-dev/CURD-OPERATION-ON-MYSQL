const Sale = require("../models/saleModel")

const saleController = {
    getAllSales: async (req, res) => {
        try {
            const sales = await Sale.getAll();
            res.send(sales);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    addSale: async (saleData) => {
        const { product_id, quantity_sold, sale_date } = saleData;
        
        try {
            const newSale = await Sale.create({ product_id, quantity_sold, sale_date });

        } catch (error) {
            console.log(error.message)
        }
        console.log(saleData)
    }

    }


module.exports = saleController;