
# Creating CRUD Functions with MySQL and Cron Job Integration

This API documentation outlines the functionalities and endpoints of the backend server developed using Node.js, Express.js, MySQL, and cron jobs. The server provides CRUD (Create, Read, Update, Delete) operations for managing products stored in a MySQL database, as well as a cron job integration to periodically fetch data and update the database. Also, there is a logger to store log data in the MySQL database.

## Dependencies



**Server:** dotenv, express, mysql2, node-cron,
winston, winston-mysql and nodemon.


## Authentication
Authentication is not required for accessing the endpoints.


## Run Locally

Clone the project

```bash
  git clone https://github.com/Wali-dev/CURD-OPERATION-ON-MYSQL.git
```

Go to the project directory

```bash
  cd CURD-OPERATION-ON-MYSQL
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm start
```

Finally, point your browser at [http:localhost:8000/]() (the first request will take a few seconds to compile the assets). You're all set.


# Products

### Get all products

```bash
http:localhost:8000/products

```

### Response

```bash
  [
  {
    "id": 1,
    "name": "Product 1",
    "description": "Description of Product 1",
    "price": 10.99,
    "quantity": 100
  },
  {
    "id": 2,
    "name": "Product 2",
    "description": "Description of Product 2",
    "price": 20.99,
    "quantity": 50
  }
]

```
### Get Product by ID

```bash
http:localhost:8000/products/:id

```

### Response

```bash
{
  "id": 1,
  "name": "Product 1",
  "description": "Description of Product 1",
  "price": 10.99,
  "quantity": 100
}


```

### Add Product

```bash
http:localhost:8000/products

```
### Request Body

```bash
{
  "name": "New Product",
  "description": "Description of New Product",
  "price": 15.99,
  "quantity": 75
}


```

### Response

```bash
 {
  "id": 3,
  "name": "New Product",
  "description": "Description of New Product",
  "price": 15.99,
  "quantity": 75
}


```
### Update Product

```bash
http:localhost:8000/products/:id

```
### Request Body

```bash
{
  "name": "Updated Product",
  "description": "Updated Description",
  "price": 18.99,
  "quantity": 80
}



```

### Response

```bash
{
  "id": 3,
  "name": "New Product",
  "description": "Description of New Product",
  "price": 15.99,
  "quantity": 75
}

```

### Delete product

```bash
http:localhost:8000/:id

```

### Response

```bash
{
  "message": "Product deleted successfully"
}
```

# Get logs
### get all logs

```bash
http:localhost:8000/logs

```

### Response

```bash
{
    "id": 1,
    "level": "warn",
    "message": "log Information",
    "meta": "{\"service\":\"user-service\",\"timestamp\":\"01:22:01\"}",
    "timestamp": "2024-05-04T19:52:01.000Z"
  },
  {
    "id": 2,
    "level": "info",
    "message": "log Information",
    "meta": "{\"service\":\"user-service\",\"timestamp\":\"01:22:01\"}",
    "timestamp": "2024-05-04T19:52:01.000Z"
  },
  {
    "id": 3,
    "level": "debug",
    "message": "log Information",
    "meta": "{\"service\":\"user-service\",\"timestamp\":\"01:22:01\"}",
    "timestamp": "2024-05-04T19:52:01.000Z"
  }

```



# CRON JOB
The cron job is configured to run at hourly intervals using the node-cron library. At each scheduled execution, the cron job accesses a dummy file of fake sale data, which provides information about the quantity of products sold and the sale date. Upon receiving the data, the cron job processes it and inserts new sales records into the sales table in the database. If there are existing sales records for the same product and sale date, the cron job updates the quantity_sold field accordingly.

```bash 
cron.schedule('0 * * * *', () => {
  if (fakeData) {
    let data = fakeData.sales;
    const dataLen = data.length;
    data = data[dataLen - 1]
    const saleData = {
      product_id: data.product_id,
      quantity_sold: data.quantity_sold,
      sale_date: data.sale_date
    }
    saleCronJobController.addSale(saleData)
    logger.info('Posting sale data on sales table is running...');
  }
  else 
   logger.info('Cron Job currently not running because no sale data was found');
});

```
## Logger

The logger integrated into this backend project serves the purpose of recording errors and relevant information during the execution of various components such as API endpoints, database operations, and cron jobs. It facilitates debugging, monitoring, and troubleshooting by providing a centralized mechanism for logging important events and errors.

The logs are saved into database and can be further accessed through making a GET request to end point "/logs".

See the [Get logs section](#logger) to know more.
## Folder Structure
```bash
└── 📁Test_API
    └── .env
    └── .gitignore
    └── app.js
    └── 📁config
        └── database.js      // MySQL database configuration
    └── 📁controllers
        └── logsController.js    //logs Controll
        └── productController.js   //product controll
        └── saleCronJobController.js  // cron job control
    └── 📁data
        └── fakeSaleData.json      //fake sale data
    └── index.js
    └── 📁models
        └── getlogsModel.js
        └── productModel.js
        └── saleModel.js
    └── package-lock.json
    └── package.json
    └── 📁routes
        └── logRoute.js     //route for getting logs from db
        └── productRoute.js    //route for product CURD
    └── 📁utils
        └── cronJob.js
        └── 📁logger     //logging funtionality
            └── debugLogger.js
            └── index.js

```
## Authors

- [@WALI](https://www.github.com/wali-dev)

