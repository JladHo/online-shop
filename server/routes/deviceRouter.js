const Router = require('express')
const router = new Router()

router.post('/', (req, res) => {
    res.status(200).json({message: "dddd"})
})
router.get('/', (req, res) => {
	res.status(200).json({ message: 'dddd' })
})
router.get('/:id', (req, res) => {
	res.status(200).json({ message: 'dddd' })
})

module.exports = router