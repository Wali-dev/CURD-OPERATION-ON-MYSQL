const productController = {
    getAllProducts: async (req, res) => {
      res.send("THis is the getallproducts route")
    },
  
    getProductById: async (req, res) => {
        res.send("THis is the getproductsbyID route")
    },
  
    addProduct: async (req, res) => {
        res.send("THis is the addproduct route")
    },
  
    updateProduct: async (req, res) => {
        res.send("THis is the update product route")
    },
  
    deleteProduct: async (req, res) => {
        res.send("THis is the delete route")
    }
  }
  
  module.exports = productController;