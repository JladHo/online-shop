class BrandController {
	async create(req, res) {
		res.status(200).json({ message: 'Эндпоинт создания брэнда' })
	}

	async get(req, res) {
		res.status(200).json({ message: 'Эндпоинт получения брэнда' })
	}
}

module.exports = new BrandController()
