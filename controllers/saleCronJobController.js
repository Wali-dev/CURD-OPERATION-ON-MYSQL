const Sale = require("../models/saleModel");
const logger = require("../utils/logger/index");

const saleController = {
    getAllSales: async (req, res) => {
        try {
            const sales = await Sale.getAll();
            res.send(sales);
        } catch (error) {
            res.status(500).json({ error: error.message });
            logger.debug("Can not fetch sale from Db, File: saleCronController.js")
        }
    },

    addSale: async (saleData) => {
        const { product_id, quantity_sold, sale_date } = saleData;

        try {
            const newSale = await Sale.create({ product_id, quantity_sold, sale_date });

        } catch (error) {
            logger.debug("Can not add sale to DB, File: saleCronController.js")
        }
        console.log(saleData)
    }

}


module.exports = saleController;