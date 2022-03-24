const express = require('express')
const { getProducts, postProducts, deleteProducts , updateProducts  } = require("../controllers/productsController");
const router = express.Router()


router.get('/', getProducts)

router.post('/', postProducts )

router.put('/:id', updateProducts)

router.delete('/:id',deleteProducts)



module.exports = router

