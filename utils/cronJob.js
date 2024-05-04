const cron = require("node-cron")
const saleCronJobController = require("../controllers/saleCronJobController")
const fakeData = require("../data/fakeSaleData.json");
const logger = require("../utils/logger/index");



// Schedule cron job to run every hour
cron.schedule('* * * * *', () => {

  if (fakeData) {

    let data = fakeData.sales;
    const dataLen = data.length;
    // assuming that the latest sale data is on the last object of this fake database. 
    // So, we are going to select the last data to append in our sale table
    data = data[dataLen - 1]

    const saleData = {
      product_id: data.product_id,
      quantity_sold: data.quantity_sold,
      sale_date: data.sale_date
    }

    // Calling functions
    saleCronJobController.addSale(saleData)
    logger.info('Posting sale data on sales table is running...');

  }
  else logger.info('Cron Job currently not running because no sale data was found');


});



