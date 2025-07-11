import express from 'express'
import { getPaginatedProducts, getProductDetail, getProducts } from '../controllers/productController.js'
import { getProductsByCategory } from '../controllers/categoryController.js'

const router = express.Router()

// router.get('/', getProducts)


// /api/products/page?page=2&limit=8
router.get('/page', getPaginatedProducts)

// /api/products/product?idp=686ebe61330880df3240c9e7
router.get('/product', getProductDetail)

// http://localhost:3000/api/v1/products?category=Networking
router.get('/', getProductsByCategory)

export default router