const Router = require('express')
const router = new Router()
const basketController = require('../controllers/basketController')
const authMiddleware = require('../middleware/authMiddleWare')

router.get('/', authMiddleware, basketController.getItems)
router.post('/', authMiddleware, basketController.addItem)
router.delete('/', authMiddleware, basketController.deleteItem)

module.exports = router