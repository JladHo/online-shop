class DeviceController {
	async create(req, res) {
		res.status(200).json({ message: 'Эндпоинт добавления девайса' })
	}

	async getAll(req, res) {
		res.status(200).json({ message: 'Эндпоинт получения всех девайсов' })
	}

	async getOne(req, res) {
		res.status(200).json({ message: 'Эндпоинт получения одного девайса' })
	}
}

module.exports = new DeviceController()
