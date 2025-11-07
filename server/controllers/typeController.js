class TypeController {
	async create(req, res) {
		res.status(200).json({ message: 'Эндпоинт создания типа' })
	}

	async get(req, res) {
		res.status(200).json({ message: 'Эндпоинт получения типа' })
	}
}

module.exports = new TypeController()
