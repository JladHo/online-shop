const ApiError = require('../error/apiError')
class UserController {
	async registration(req, res) {
		res.status(200).json({ message: 'Эндпоинт регистрации' })
	}

	async login(req, res) {
		res.status(200).json({ message: 'Эндпоинт авторизации' })
	}

	async check(req, res, next) {
		const {id} = req.query // получаем id из строки запроса
		if (!id) {
			return next(ApiError.badRequest('Не задан id'))
		}

		res.status(200).json({ message: `Эндпоинт проверки получил id - ${id}` })
	}
}

module.exports = new UserController()
