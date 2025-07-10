import express from 'express'
import { getPaginatedProducts, getProducts } from '../controllers/productController.js'

const router = express.Router()

router.get('/', getProducts)

// Supports both:
// /api/products/page/2?limit=5
// /api/products?page=2&limit=5
router.get('/page/:page', getPaginatedProducts)

export default router