const express = require("express")
const app = express()
const productRouter= require("./routes/productRoute")


// Middleware
app.use(express.json());

// Routes
app.use("/products", productRouter);

// Error handler
app.use((req, res)=>{
    res.status(404).send("There is no such route")
})



module.exports = app;