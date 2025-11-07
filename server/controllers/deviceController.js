class DeviceController {
	async registration(req, res) {
		res.status(200).json({ message: 'Эндпоинт регистрации' })
	}

	async login(req, res) {
		res.status(200).json({ message: 'Эндпоинт авторизации' })
	}

	async auth(req, res) {
		res.status(200).json({ message: 'Эндпоинт проверки' })
	}
}

module.exports = new DeviceController()
