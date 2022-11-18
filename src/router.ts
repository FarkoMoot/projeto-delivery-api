import path from 'node:path'
import { Router } from 'express'
import multer from 'multer'

import { listCategories } from './app/useCases/categories/listCategories';
import { createCategory } from './app/useCases/categories/createCategories'
import { listProducts } from './app/useCases/products/listProducts'
import { createProducts } from './app/useCases/products/createProducts';
import { listProductByCategories } from './app/useCases/categories/listProductByCategories'
import { listOrders } from './app/useCases/orders/listOrders'
import { createOrder } from './app/useCases/orders/createOrders'
import { changeOrderStatus } from './app/useCases/orders/changeOrderStatus'
import { cancelOrders } from './app/useCases/orders/cancelOrders'



import { rotaDel } from './app/useCases/teste/rotaDel'

export const router = Router();

const uploads = multer({
  storage: multer.diskStorage({
    destination(req, file, callback) {
      callback(null, path.resolve(__dirname,'..','uploads'))
    },
    filename(req, file, callback) {
      callback(null, `${Date.now()}-${file.originalname}`)
    }
  })
})

// list category
router.get('/categories', listCategories)

// create category
router.post('/categories', createCategory)

//list Product
router.get('/products', listProducts)

//create Product
router.post('/products', uploads.single('image') , createProducts)

//get product by category
router.get('/categories/:categoryId/products', listProductByCategories)

//list order
router.get('/orders', listOrders)

//create order
router.post('/orders', createOrder)

//change order status
router.patch('/orders/:orderId', changeOrderStatus)

//delete/cancel order
router.delete('/orders/:orderId', cancelOrders)

//eu que inventei moda
//delete all
router.post('/delete', rotaDel)
