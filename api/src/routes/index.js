const {Router} = require('express')
const { allCategory, UpdateCategory,CreateCategory } = require('../controller/Category.js')
const { Products,CreateProduct, ProductsID,UpdateProduct } = require('../controller/Products.js')


const router = Router()

router.get('/products',Products)
router.get('/products/:id',ProductsID)
router.post('/products',CreateProduct)
router.put('/products/:id',UpdateProduct)
router.get('/category',allCategory)
router.post('/category',CreateCategory)
router.put('/category',UpdateCategory)
module.exports = router