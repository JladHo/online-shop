const {Type} = require('../models/models')
const ApiError = require('../error/apiError')

class TypeController {
	async create(req, res) {
		const {name} = req.body
		const type = await Type.create({name})
		return res.json(type)
	}

	async get(req, res) {
		const types = await Type.findAll()
		return res.json(types)
		// res.status(200).json({ message: 'Эндпоинт получения типа' })
	}
}

module.exports = new TypeController()
