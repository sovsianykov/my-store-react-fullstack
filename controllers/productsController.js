const Product= require('../models/Product')


const getProducts = async ( req,res) => {
    try {
        const products = await Product.find()

        return res.status(200).json({
           success: true,
            count: products.length,
            data: products
        });
    } catch (err) {
       return  res.send(500).json({
           success: false,
           error: 'Server error'

       })
    }
}

const postProducts = async (req,res) =>{
    try {
        const product =  await Product.create(req.body)

        return res.status(201).json({
            success: true,
            data : product
        })
    } catch (err) {
        console.log(err);
    }




    res.status(200).json({message: `Set product`})
}

const updateProducts =  async (req,res) =>{



    res.status(200).json({message: `Update products ${req.params.id}`})
}

const deleteProducts = async (req,res) =>{
    res.status(200).json({message: `Delete products ${req.params.id}`})
}

module.exports = {
    getProducts,
    postProducts,
    updateProducts,
    deleteProducts
}