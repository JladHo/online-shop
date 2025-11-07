const Router = require('express')
const router = new Router()

const userController = require('../controllers/userController')

router.post('/registration', (req, res) => {
	userController.registration(req, res)
})
router.post('/login', (req, res) => {
	userController.login(req, res)
})
router.get('/auth', (req, res) => {
	userController.auth(req, res)
})

module.exports = router