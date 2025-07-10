import express from 'express'
import { getPaginatedProducts, getProductDetail, getProducts } from '../controllers/productController.js'

const router = express.Router()

// router.get('/', getProducts)

// Supports both:
// /api/products/page/2?limit=5
// /api/products?page=2&limit=5
router.get('/page', getPaginatedProducts)

router.get('/product', getProductDetail)

export default router