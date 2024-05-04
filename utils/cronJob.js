const cron = require("node-cron")
const saleCronJobController = require("../controllers/saleCronJobController")

// Schedule cron job to run every hour
cron.schedule('* * * * * *', () => {

saleCronJobController.getAllSales()
  // Call your cron job function here
  // For example: fetchDataAndPostToSales();
  console.log('Cron job running...');
});