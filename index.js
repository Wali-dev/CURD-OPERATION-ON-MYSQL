const app = require("./app")
require("dotenv").config()

const PORT = process.env.PORT || 9000;


app.listen(PORT, ()=>{
    console.log(`The server is running on http://localhost:${PORT}`)
})